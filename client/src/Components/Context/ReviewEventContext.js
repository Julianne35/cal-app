import { createContext} from "react";
import { useParams } from "react-router-dom";

export const ReviewEventContext = createContext();

export const CreateEventProvider = (props) => {
  const {contactName} = useParams();
  // const [eventName, setEventName] = useState("");
  // const [contactPhone, setContactPhone] = useState("");

  return (
    <>
      <ReviewEventContext.Provider
        value={[
          contactName,
          // eventName,
          // setEventName,
          // contactPhone,
          // setContactPhone,
        ]}
      >
        {props.children}
      </ReviewEventContext.Provider>
    </>
  );
};
