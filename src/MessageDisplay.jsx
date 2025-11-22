import PropTypes from "prop-types";
import { useState } from "react";

function MessageDisplay(){
const [message, setMessage]=useState("Hello!");
return(
    <div>
        <p>{message}</p>
        <button onClick={() => setMessage("Message changed!")}>Change Message</button>
    </div>
)
}
MessageDisplay.propTypes ={
    message: PropTypes.string
}
export default MessageDisplay;