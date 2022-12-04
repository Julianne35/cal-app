import React from "react";
import Wrapper from "../UI/Wrapper";
import style from "../UI/Wrapper";
import UserButton from "../UI/UserButton";
import { Form } from "react-bootstrap";

const CreateEvent = () => {
  return (
    <>
      <Wrapper>
        <h1 className={style["header"]}>Register Your Account</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="email" placeholder="User Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="register-password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="number" placeholder="Phone Number" />
          </Form.Group>
          <UserButton linkTo={`/success`} className={style.btn}>
            CREATE ACCOUNT
          </UserButton>
        </Form>
      </Wrapper>
    </>
  );
};
export default CreateEvent;
