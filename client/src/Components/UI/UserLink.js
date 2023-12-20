import { Link } from "react-router-dom";
import style from "../UI/UserBtn.module.css";

const UserLink = (props) => {
  const linkClass = style["login-btn"];
  const path = { pathname: `${props.linkTo}` };
  return (
    <Link className={linkClass} to={path} onClick={props.onClick}>
      {props.children}
    </Link>
  );
};

export default UserLink;

//cannot use with Heroku- Linkn from react router works only, page breats with CANNOT GET / when using href
