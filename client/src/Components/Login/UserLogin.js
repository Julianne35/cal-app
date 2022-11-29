import React from "react";
import { Form } from "react-bootstrap";
import Wrapper from "../UI/Wrapper";
import UserButton from "../UI/UserButton";
import { Link } from "react-router-dom";
import style from "./Login.module.css";

const UserLogin = () => {
  //script
  return (
    <>
      <Wrapper>
        <h1 className={style["header"]}>Welcome</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="User Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <UserButton
            cName={style["login-btn"]}
            variant="primary"
            type="submit"
          >
            LOGIN
          </UserButton>
          <Form.Text>
            <div className={style["register-text"]}>
              <Link to={{ pathname: `/register` }} className={style.link}>REGISTER NEW ACCOUNT</Link>
            </div>
          </Form.Text>
        </Form>
      </Wrapper>
    </>
  );
};

export default UserLogin;
