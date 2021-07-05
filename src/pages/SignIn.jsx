import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form, Container, Card } from 'react-bootstrap';
import { signInRequest } from '../actions';
import { Message, Loader } from '../components';

export const SignIn = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { message, success } = useSelector((state) => state.auth);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setRedirect(true);
      }, 2000);
    }
  }, [success]);

  const dispatch = useDispatch();

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(signInRequest({ login, password }));
  };

  return (
    <Container fluid className="py-4">
      {message ? (
        <Message text={message} type={success ? 'success' : 'danger'} />
      ) : null}

      {!success ? (
        <>
          <Card style={{ width: 300 }} className="mx-auto">
            <Card.Title className="mx-auto pt-4">Sign In</Card.Title>
            <Card.Body>
              <Form>
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

                <Button
                  variant="primary"
                  type="submit"
                  onClick={handleSignIn}
                  disabled={!login.length || !password.length}
                >
                  Sing In
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <Card style={{ width: 300 }} className="mx-auto mt-4">
            <Card.Body className="mx-auto">
              <Link to="/join">Create an account</Link>
            </Card.Body>
          </Card>
        </>
      ) : (
        <>
          <p className="text-center">
            Hi {login}! You will be redirected to our profile
          </p>
          <Loader />
          {redirect ? <Redirect to="/profile" /> : null}
        </>
      )}
    </Container>
  );
};
