import { useState } from "react";
import { signUp } from "../utils";

const SignUp = ({ setter, setSignUp }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    await signUp(username, email, password, setter);
  };

  return (
    <div className="login-form">
      <p id="sign-up-text">Sign up to see photos and videos from your friends.</p>
      <form onSubmit={submitHandler}>
        <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <br></br>

        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <br></br>

        <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <button className="submit" type="submit">
          Sign Up
        </button>
      </form>
      <p id="top-margin">Already have an account?</p>
      <button className="submit" onClick={() => setSignUp(false)}>Click here to login</button>
    </div>
  );
};

export default SignUp;
