import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const PasswordReset = ({
  handleOnResetSubmit,
  handleOnchange,
  email,
  formSwitcher,
}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2 className="text-info text-center">Reset Password</h2>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
            <hr />
            <a href="#!" onClick={() => formSwitcher("login")}>
              Login
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

PasswordReset.propTypes = {
  handleOnchange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
