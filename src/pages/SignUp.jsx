import React, { useState } from 'react';
import { Button, Form, Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpRequest } from '../actions';
import { Message } from '../components';

export const SignUp = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [birth, setBirth] = useState('');
  const { message, success } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(signUpRequest({ login, password, name, lastname, birth }));
  };

  return (
    <Container fluid className="py-4">
      <h2 className="text-center">Create your account</h2>
      {message ? (
        <Message text={message} type={success ? 'success' : 'danger'} />
      ) : null}

      {!success ? (
        <Form className="mx-auto p-4" style={{ width: 600 }}>
          <Form.Group controlId="formBasicLogin">
            <Form.Label>Login</Form.Label>
            <Form.Control
              placeholder="Login"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(event) => setLastName(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Day of birth</Form.Label>
            <Form.Control
              type="text"
              placeholder="Day of birth"
              value={birth}
              onChange={(event) => setBirth(event.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={handleSignUp}
            disabled={!login.length || !password.length}
          >
            Create account
          </Button>
        </Form>
      ) : (
        <Card style={{ width: 300 }} className="mx-auto mt-4">
          <Card.Text className="mx-auto py-4">
            <Link to="/">Log In</Link>
          </Card.Text>
        </Card>
      )}
    </Container>
  );
};
