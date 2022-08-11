import { useState } from "react";
import { updateEmail } from "../utils";

const ChangeEmail = ({username}) => {
  const [email, setEmail] = useState();
  const [updatedEmail, setUpdatedEmail] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    setUpdatedEmail(email);
    await updateEmail(username, email);
  };
  return (
    <div id="email-container">
    <h2>Update your email here:</h2>
    <h3>{updatedEmail ? `Your email has been updated to ${updatedEmail}` : ""}</h3>
    <form onSubmit = {submitHandler}>
        <input placeholder="Type your new email here" onChange ={ (e) =>  setEmail(e.target.value)} />
        <button class="main-button" id="update-button" type="submit">Update Email</button>
    </form>
    </div>
)
}

export default ChangeEmail;
