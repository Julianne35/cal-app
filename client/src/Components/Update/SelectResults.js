import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Wrapper from "../UI/Wrapper";
import style from "../Create/Create.module.css";
import { Form, Col } from "react-bootstrap";

const SelectResults = () => {
  const [event, setEvent] = useState([]);
    const [contactname, setContactName] = useState([]);
    const [contactphone, setContactPhone] = useState([]);
    const [contactemail, setContactEmail] = useState([]);
    const [street, setStreet] = useState([]);
    const [city, setCity] = useState([]);
    const [state, setState] = useState([]);
    const [zipcode, setZipCode] = useState([]);
  const { calId } = useParams();

  const header = style.header;

  useEffect(() => {
    axios.get(`/getid/${calId}`).then((res) => {
      console.log(res.data.data);
    //   console.log('result', res.data.data.details.map((r)=> r.eventaddress.map((s)=> s.street )));
      setEvent(res.data.data.event);
        setContactName(res.data.data.details.map((r) => r.contactname));
        setContactPhone(res.data.data.details.map((r) => r.contactphone));
        setContactEmail(res.data.data.details.map((r) => r.contactemail));
        setStreet(res.data.data.details.map((r) => r.eventaddress.map((s)=> s.street )));
        setCity(res.data.data.details.map((r) => r.eventaddress.map((c)=> c.city )));
        setState(res.data.data.details.map((r) => r.eventaddress.map((s)=> s.state )));
        setZipCode(res.data.data.details.map((r) => r.eventaddress.map((z)=> z.zipcode )));
    });
  }, [
    setEvent,
    setContactName,
    setContactPhone,
    setContactEmail,
    setStreet,
    setCity,
    setState,
    setZipCode,
    calId,
  ]);
  return (
    <>
      <Wrapper>
        <h1 className={header}>Review Event Information</h1>
        <hr />
        <Col className={"col-sm-5"}>
          <Form.Label>Event Title:</Form.Label>
          <Form.Control value={event} />
          
        </Col>
        <br />
        <Col className={"col-sm-5"}>
          <Form.Label>Event Address: </Form.Label>
          <Form.Control value={street} />
        </Col>
        <br />
        <Col className={"col-sm-5"}>
          <Form.Label>City: </Form.Label>
          <Form.Control value={city} />
        </Col>
        <br />
        <Col className={"col-sm-5"}>
          <Form.Label>State: </Form.Label>
          <Form.Control value={state} />
        </Col>
        <br />
        <Col className={"col-sm-5"}>
          <Form.Label>Zip Code: </Form.Label>
          <Form.Control value={zipcode} />
        </Col>
        <br />
        <hr />
        <Col className={"col-sm-5"}>
          <Form.Label>Event planer: </Form.Label>
          <Form.Control value={contactname} />
        </Col>
        <br />
        <Col className={"col-sm-5"}>
          <Form.Label>Phone: </Form.Label>
          <Form.Control value={contactphone} />
        </Col>
        <br />
        <Col className={"col-sm-5"}>
          <Form.Label>Email: </Form.Label>
          <Form.Control value={contactemail} />
        </Col>
        <br />
        <hr />
      </Wrapper>
    </>
  );
};
export default SelectResults;
