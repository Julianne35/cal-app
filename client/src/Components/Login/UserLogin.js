import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Wrapper from "../UI/Wrapper";
import UserLink from "../UI/UserLink";
import style from "./Login.module.css";

const UserLogin = () => {
  const h1Class = style.header;
  const btnClass = style["login-btn"];
  const regText = style["register-text"];
  const padding = style.padding;
  const logInLink = { pathname: `/register` };
  const regClass = style.link;

  return (
    <>
      <Wrapper>
        <h1 className={h1Class}>Welcome</h1>
        <Form>
          <Form.Group className={padding} controlId="formBasicEmail">
            <Form.Control type="email" placeholder="User Email" />
          </Form.Group>
          <Form.Group className={padding} controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <UserLink cName={btnClass} variant="primary" type="submit">
            LOGIN
          </UserLink>
          <Form.Text>
            <div className={regText}>
              <Link to={logInLink} className={regClass}>
                REGISTER NEW ACCOUNT
              </Link>
            </div>
          </Form.Text>
        </Form>
      </Wrapper>
    </>
  );
};

export default UserLogin;
