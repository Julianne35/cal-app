import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TimePicker from "react-time-picker";
import DatePicker from "react-date-picker";
import Wrapper from "../UI/Wrapper";
import style from "./Create.module.css";
import globalStyle from "../UI/style.css";
import UserLink from "../UI/UserLink";
import { Form, Button, InputGroup } from "react-bootstrap";

const CreateEvent = () => {
  // let {calId} = useParams(); //calId is an OBJ
  let navigate = useNavigate();
  const [contactname, setContactName] = useState("");
  const [contactphone, setContactPhone] = useState("");
  const [contactemail, setContactEmail] = useState("");
  const [event, setEvent] = useState("");
  const [details, setDetails] = useState([]);
  const [eventaddress, setEventAddress] = useState([]);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("NY");
  const [zipcode, setZipCode] = useState("");

  const subLink = `/review/${event}/${contactname}/${contactphone}/${contactemail}/${street}/${city}/${state}/${zipcode}/`;

  const [timeValue, setTimeValue] = useState(new Date());
  const [dateValue, setDateValue] = useState(new Date());
  const header = style.header;
  const subHeader = style.subHeader;
  const padding = style.padding;
  const flexWrap = style.flexWrapper;
  const nyInput = style.nyInput;
  const cityInput = style.cityInput;
  const upload = style.uploadBtn;

  //useEffect needed to initate function to push data in details array
  //NOTE with useEffect remove <React.strict> (happens in dev mode only) or component will render twice
  //put <React.strict> back on before production.
  useEffect(() => {
    axios({
      method: "POST",
      url: "/post",
      // url: `http://localhost:3000/post/${calId}`,
      data: {
        event: event,
        details: details, //<-- order is important
      },
    }).then((res) => {
      console.log("resp", res.data);
      navigate(
        `/review/${event}/${contactname}/${contactphone}/${contactemail}/${street}/${city}/${state}/${zipcode}/`
      );
    });
  }, [details]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //function needed to post address prop (first step)

    setEventAddress((eventaddress) => [
      ...eventaddress,
      { street: street, city: city, state: state, zipcode: zipcode },
      console.log("address", street, city, state, zipcode),
    ]);

    setDetails((details) => [
      ...details,
      {
        contactname: contactname,
        contactphone: contactphone,
        contactemail: contactemail,
        //address data posted from nested obj array within obj array (2nd step)
        eventaddress: [{ ...eventaddress, street, city, state, zipcode }],
      },
      // ]);
    ]);
  };

  return (
    <>
      <Wrapper>
        <h1 className={header}>Create Event</h1>
        <h2 className={subHeader}>Contact Info</h2>
        <hr />
        <Form action="/post" method="post" onSubmit={handleSubmit}>
          <Form.Group className={padding} controlId="contactname">
            <Form.Control
              type="text"
              name="contactname"
              value={contactname}
              onChange={(e) => setContactName(e.target.value)}
              placeholder="Contact Name"
            />
          </Form.Group>
          <Form.Group className={padding} controlId="contactphone">
            <Form.Control
              type="number"
              name="contactphone"
              value={contactphone}
              onChange={(e) => setContactPhone(e.target.value)}
              placeholder="Contact Phone"
            />
          </Form.Group>
          <Form.Group className={padding} controlId="contactemail">
            <Form.Control
              type="email"
              name="contactemail"
              value={contactemail}
              onChange={(e) => setContactEmail(e.target.value)}
              placeholder="Contact Email"
            />
          </Form.Group>
          <h2 className={subHeader}>Event Info</h2>
          <hr />
          <Form.Group className={padding} controlId="eventname">
            <Form.Control
              type="text"
              name="eventname"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
              placeholder="Event Name"
            />
          </Form.Group>

          <div className={flexWrap}>
            <Form.Label>Event Time</Form.Label>
            <TimePicker
              clockClassName="globalStyle"
              className={padding}
              onChange={setTimeValue}
              value={timeValue}
              format="hh:mm aa"
              autoFocus={false}
              hourPlaceholder="HH"
              minutePlaceholder="MM"
              clearIcon="reset time"
              disableClock={true}
            />
          </div>

          <div className={flexWrap}>
            <Form.Label>Event Date</Form.Label>
            <DatePicker
              calendarClassName="globalStyle"
              className={padding}
              clearIcon="reset date"
              onChange={setDateValue}
              value={dateValue}
            />
          </div>

          <div className={flexWrap}>
            <Form.Group controlId="street">
              <Form.Control
                type="text"
                name="street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Street"
              />
            </Form.Group>
            <Form.Group className={cityInput} controlId="city">
              <Form.Control
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
              />
            </Form.Group>
            <Form.Select
              className={nyInput}
              type="text"
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="NY">NY</option>
              <option value="NJ">NJ</option>
              <option value="PA">PA</option>
            </Form.Select>
          </div>

          <div className={padding}>
            <Form.Group controlId="zipcode">
              <Form.Control
                type="number"
                name="zipcode"
                value={zipcode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Zip Code"
              />
            </Form.Group>

            <Button className={upload} variant="secondary">
              Upload
            </Button>
          </div>

          <InputGroup className={padding}>
            <Form.Control as="textarea" placeholder="Event Description" />
          </InputGroup>

          <UserLink
            linkTo={subLink} //<-- works in production not local
            className={style.btn}
            onClick={handleSubmit}
          >
            CREATE AND REVIEW
          </UserLink>
        </Form>
      </Wrapper>
    </>
  );
};
export default CreateEvent;

//will not post unless all data fields are being called, you cant just test out one field at a time unless you comment data on model on server
// **** in production Link is used, in local btn is used to POST
