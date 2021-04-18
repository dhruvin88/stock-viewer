import React from "react";
import PropTypes from "prop-types";
import styles from "./Login.module.css";
import {Button, Container, Row, Col} from 'react-bootstrap';

const Login = () => (
  <div className={styles.Login} data-testid="Login">
    Login Component
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <Button></Button>
        </Col>
      </Row>
    </Container>
  </div>
);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
