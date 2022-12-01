import { Button } from "react-bootstrap";
import style from "../UI/UserBtn.module.css";

const UserButton = (props) => {
  // return <Button className={props.cName}>{props.children}</Button>;
  return <Button className={style["login-btn"]} href={`${props.refLink}`}>{props.children}</Button>;
};

export default UserButton;
