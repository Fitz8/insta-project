import { useState } from "react";
import { signUp } from "../utils";

const SignUp = ({ setter, setSignUp, error, setError }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    const result = await signUp(username, email, password, setter);

    if (!result) {
      setError(true);
    }
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
      <p style={{display: error ? "block" : "none"}}>The username or email has already <br></br> been registered</p>
      <p id="top-margin">Already have an account?</p>
      <button className="submit" onClick={() => { 
        setSignUp(false) 
        setError(false)
      }}>Click here to login</button>
    </div>
  );
};

export default SignUp;
