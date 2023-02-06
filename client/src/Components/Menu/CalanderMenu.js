import UserLink from "../UI/UserLink";
import Wrapper from "../UI/Wrapper";
import style from "../UI/UserBtn.module.css";
import calStyle from "./CalStyle.module.css";

const CalanderMenu = () => {
  const h1Class = calStyle.calh1;
  const h2Class = calStyle.calh2;
  const divClass = calStyle.caldiv;
  return (
    <>
      <Wrapper>
        <h1 className={h1Class}>Welome</h1>
        <h2 className={h2Class}>Choose an action below</h2>
        <div className={divClass}>
          <UserLink linkTo={`/calander`} className={style.btn}>
            VIEW CALANDER
          </UserLink>
        </div>
        <div className={divClass}>
          <UserLink linkTo={`/create`} className={style.btn}>
            CREATE NEW EVENT
          </UserLink>
        </div>
        <div className={divClass}>
          <UserLink linkTo={`/view`} className={style.btn}>
            VIEW EVENT
          </UserLink>
        </div>
        <div className={divClass}>
          <UserLink linkTo={`/edit`} className={style.btn}>
            EDIT EVENT
          </UserLink>
        </div>
        <div className={divClass}>
          <UserLink linkTo={`/manage`} className={style.btn}>
            MANAGE EVENT
          </UserLink>
        </div>
        <div className={divClass}>
          <UserLink linkTo={`/remove`} className={style.btn}>
            REMOVE EVENT
          </UserLink>
        </div>
        <div className={divClass}>
          <UserLink linkTo={`/message`} className={style.btn}>
            MESSAGE CENTER
          </UserLink>
        </div>
      </Wrapper>
    </>
  );
};

export default CalanderMenu;
