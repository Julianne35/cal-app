import React from "react";
import Wrapper from "../UI/Wrapper";
import {Image} from "react-bootstrap";

const LoginStatus = () => {
  return ( 
    <>
      <Wrapper>
        
        <Image src="https://img.icons8.com/cotton/512/checkmark.png" className="img-fluid"/>
        <h3 style={{textAlign:"center"}}>Your account is created! Please verify your e-mail to login</h3>
      </Wrapper>
    </>
  );
};

export default LoginStatus;
