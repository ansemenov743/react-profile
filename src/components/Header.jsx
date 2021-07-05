import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const Header = ({ handleSignOut }) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand>User</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link onClick={handleSignOut}>Sing Up</Nav.Link>
    </Nav>
  </Navbar>
);
