import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SelectUpdate = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    axios
     .get(`/get`)
     .then((res) => {
       console.log("event:", res.data);
       setEvent(res.data);
       // setEmployee(res.data.employee)
     })
     .catch((err) => {
       console.log(err);
     });

 }, [setEvent]);


  return (
    <>
      <h1>Review Update</h1>
      <hr />
      
      {event.map((res, index, _id) => (
        <li key={res.event}>
          <Link
            to={`/selectresults/${res._id}`}
            onClick={() => {
                console.log('RESULTS', res._id)
              return res._id;
            }}
          >
            Event Name: {res.event}
          </Link>
        </li>
      ))}
    </>
  );
};
export default SelectUpdate;
