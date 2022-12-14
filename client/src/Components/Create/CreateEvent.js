import { useState } from "react";
import TimePicker from "react-time-picker";
import DatePicker from "react-date-picker";
import Wrapper from "../UI/Wrapper";
import style from "../UI/Wrapper";
import globalStyle from "../UI/style.css";
import UserButton from "../UI/UserButton";
import { Form, Button, InputGroup} from "react-bootstrap";

const CreateEvent = () => {
  const [timeValue, setTimeValue] = useState(new Date());
  const [dateValue, setDateValue] = useState(new Date());
  const header = style.header;
  const subHeader = style.subHeader;
  const padding = style.padding;
  const flexWrap = style.flexWrapper;
  const nyInput = style.nyInput;
  const cityInput = style.cityInput;
  const upload = style.uploadBtn;
  return (
    <>
      <Wrapper>
      <h1 className={header}>Create Event</h1>
        <h2 className={subHeader}>Contact Info</h2>
        <hr />
      <Form>
          <Form.Group className={padding} controlId="formBasicContactName">
            <Form.Control type="text" placeholder="Contact Name" />
          </Form.Group>
          <Form.Group className={padding} controlId="formBasicContactPhone">
            <Form.Control type="text" placeholder="Contact Phone" />
          </Form.Group>
          <Form.Group className={padding} controlId="formBasicContactEmail">
            <Form.Control type="email" placeholder="Contact Email" />
          </Form.Group>
          <h2 className={subHeader}>Event Info</h2>
          <hr />
          <Form.Group className={padding} controlId="formBasicEventName">
            <Form.Control type="text" placeholder="Event Name" />
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
            <Form.Group controlId="formBasicStreet">
              <Form.Control type="text" placeholder="Street" />
            </Form.Group>
            <Form.Group className={cityInput} controlId="formBasicCity">
              <Form.Control type="text" placeholder="City" />
            </Form.Group>
            <Form.Select className={nyInput}>
              <option>NY</option>
              <option>NJ</option>
              <option>PA</option>
            </Form.Select>
          </div>

          <div className={padding}>
            <Form.Group controlId="formBasicZipCode">
              <Form.Control type="number" placeholder="Zip Code" />
            </Form.Group>

            <Button className={upload} variant="secondary">
              Upload
            </Button>
          </div>

          <InputGroup className={padding}>
            <Form.Control as="textarea" placeholder="Event Description" />
          </InputGroup>

          <UserButton linkTo={`/success`} className={style.btn}>
            SUBMIT FOR REVIEW
          </UserButton>
        </Form>
      </Wrapper>
    </>
  );
};
export default CreateEvent;
