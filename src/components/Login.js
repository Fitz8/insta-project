import { useState } from "react";
import { loginCheck } from "../utils";

const Login = ({ setUser, setSignUp }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    await loginCheck(username, password, setUser);
  };

  return (
    <div className="login-form">
      <form onSubmit={submitHandler}>
          <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <br></br>
          <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <button className="submit" type="submit">Log In</button>
      </form>
      <p id="top-margin">Not got an account?</p>
      <button className="submit" onClick={() => setSignUp(true)}>Sign Up</button>
    </div>
  );
};

export default Login;
