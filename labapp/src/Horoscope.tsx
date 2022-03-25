import React, {useState} from 'react';
import TextBox from "./TextBox";
// @ts-ignore
import axios from 'axios';
// @ts-ignore
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

function Horoscope() {

  const [sunState, setSunState] = useState("")
  const [rising, setRisingState] = useState("")
  const [moonState, setMoonState] = useState("")
  const [horoscope, setHoroscope] = useState([])

  const requestHoroscope = () => {
    const toSend = {
      sun: sunState,
      moon: moonState,
      rising: rising
    };

    let config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
        }
    }

    axios.post("http://localhost:4567/horoscope", toSend, config)
      .then((response: any) => {
          console.log(response.data);
          //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
          //Note: It is very important that you understand how this is set up and why it works!
          setHoroscope(response.data['horoscope']);
      })
      .catch((error:any) => {
          console.log(error);
      });
  }

  return (
      <div className="Horoscope">
          <TextBox label={"sun sign "} change = {setSunState}/>
          <TextBox label={"rising sign "} change = {setRisingState}/>
          <TextBox label={"moon sign "} change = {setMoonState}/>
            <AwesomeButton
                type="primary"
                ripple
                onPress={requestHoroscope}
            > Press Here </AwesomeButton>
          {horoscope.map((element: any) => <div>{element}</div>)}
      </div>
  );
}

export default Horoscope;