import { useState } from "react";
import { signUp } from "../utils";

const Login = ({setter}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

const submitHandler = async (event) => {
    event.preventDefault();
    await signUp(username, email, password, setter);

}

    return (
        <form onSubmit = {submitHandler}>
            <label>Username:
            <input onChange ={ (e) =>  setUsername(e.target.value)} />
            </label>
            <br></br>

            <label>Email:
            <input onChange ={ (e) =>  setEmail(e.target.value)} />
            </label>
            <br></br>

            <label>Password:
            <input onChange ={ (e) =>  setPassword(e.target.value)} />
            </label>

            <button type="submit">Sign Up</button>
        </form>
    )
}

export default Login;