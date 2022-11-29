import { Container } from "react-bootstrap";
import style from "../UI/Wrapper.module.css";

const UserButton = (props) => {
  return (
    <Container className={style["body--login"]}>
      {props.children}
    </Container>
  );
};

export default UserButton;
