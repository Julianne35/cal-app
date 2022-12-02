import { Link } from "react-router-dom";
import style from "../UI/UserBtn.module.css";

const UserButton = (props) => {
  // return <Button className={props.cName}>{props.children}</Button>;
  // return <Button className={style["login-btn"]} href={`${props.refLink}`}>{props.children}</Button>;
  return (
    <Link className={style["login-btn"]} to={{pathname: `${props.linkTo}`}}>
      {props.children}
    </Link>
  );
};

export default UserButton;

//cannot use with Heroku- Linkn from react router works only, page breats with CANNOT GET / when using href
