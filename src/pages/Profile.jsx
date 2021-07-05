import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Col, Form, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Header, Loader, Message } from '../components';
import {
  profileRequest,
  profileUpdateRequest,
  signOutRequest,
} from '../actions';

export const Profile = () => {
  const { user, message, success, loading } = useSelector(
    (state) => state.profile,
  );

  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [birth, setBirth] = useState('');
  const [redirect, setRedirect] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem('user')) || '';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileRequest());
  }, [dispatch]);

  useEffect(() => {
    if (success === false) {
      setRedirect(true);
    }
  }, [dispatch, success]);

  useEffect(() => {
    if (user != null) {
      setBirth(user.birth);
      setName(user.name);
      setLastName(user.lastname);
    }
  }, [user]);

  const handleSignOut = () => {
    dispatch(signOutRequest());
  };

  const handleProfileUpdate = (event) => {
    event.preventDefault();
    dispatch(profileUpdateRequest({ birth, name, lastname }));
  };

  return (
    <>
      <Header handleSignOut={handleSignOut} />
      <Container fluid className="py-4">
        <h2 className="text-center">Profile</h2>
        {message ? (
          <Message text={message} type={success ? 'success' : 'danger'} />
        ) : null}
        {loading || currentUser == null ? (
          <Loader />
        ) : (
          <>
            <Form className="mx-auto p-4" style={{ width: 600 }}>
              <Form.Group as={Row} controlId="formPlaintextLogin">
                <Form.Label column sm="2">
                  Login
                </Form.Label>
                <Col sm="10">
                  <Form.Control plaintext readOnly value={currentUser.login} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextLogin">
                <Form.Label column sm="2">
                  Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    defaultValue={currentUser ? currentUser.name : ''}
                    onChange={(event) => setName(event.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextAbout">
                <Form.Label column sm="2">
                  Last name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    as="textarea"
                    rows="4"
                    defaultValue={currentUser ? currentUser.lastname : ''}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextLogin">
                <Form.Label column sm="2">
                  Day of birth
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    defaultValue={currentUser ? currentUser.birth : ''}
                    onChange={(event) => setBirth(event.target.value)}
                  />
                </Col>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={handleProfileUpdate}
              >
                Update profile
              </Button>
            </Form>
          </>
        )}
      </Container>
      {redirect ? <Redirect to="/" /> : null}
    </>
  );
};
