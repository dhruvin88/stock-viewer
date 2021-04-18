import React from "react";
import PropTypes from "prop-types";
import styles from "./Login.module.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import OauthPopup from "react-oauth-popup";
import {completeOauthUrl} from '../../key';

// TODO: Work on getting the code from the url and figure out why onCode does not trigger on successfull login
const onCode = (code, params) => {
  console.log("wooooo a code", code);
  console.log(
    "alright! the URLSearchParams interface from the popup url",
    params
  );
};

const onClose = (data) => console.log(data);

const Login = () => (
  <div className={styles.Login} data-testid="Login">
    Login Component
    <Container>
      <Row className="justify-content-md-center">
        <Col>
        <Button>
            <OauthPopup
              url = {completeOauthUrl}
              onCode = {onCode}
              onClose = {onClose}
            >
              <div>Login to TD Ameritrade</div>
            </OauthPopup>
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
