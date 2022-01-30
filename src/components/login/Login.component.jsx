import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const Login = ({ handleOnchange, handleOnSubmit, email, password ,formSwitcher}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2 className="text-info text-center">Client Login</h2>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleOnchange}
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleOnchange}
                  placeholder="Password"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
            <hr />
            <a href="#!" onClick={()=>formSwitcher('passwordreset')}>Forget Password</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Login.propTypes = {
  handleOnchange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher : PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
