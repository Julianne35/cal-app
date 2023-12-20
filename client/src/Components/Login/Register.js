import { Form } from "react-bootstrap";
import Wrapper from "../UI/Wrapper";
import UserLink from "../UI/UserLink";
import style from "./Login.module.css";

const Register = () => {
  const regLink =  "/success" ;
  const h1Class = style.header;
  const padding = style.padding;
  const btn = style.btn;
  return (
    <>
      <Wrapper>
        <h1 className={h1Class}>Register Your Account</h1>
        <Form>
          <Form.Group className={padding} controlId="formBasicEmail">
            <Form.Control type="email" placeholder="User Email" />
          </Form.Group>
          <Form.Group className={padding} controlId="formBasicPassword">
            <Form.Control type="register-password" placeholder="Password" />
          </Form.Group>
          <Form.Group className={padding} controlId="formBasicNumber">
            <Form.Control type="number" placeholder="Phone Number" />
          </Form.Group>
          <UserLink linkTo={regLink} className={btn}>
            CREATE ACCOUNT
          </UserLink>
        </Form>
      </Wrapper>
    </>
  );
};

export default Register;
