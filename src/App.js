import './App.css';
import { useState, useEffect } from "react";
import Pic from "./components/Pic";
import SignUp from './components/SignUp';
import Login from './components/Login';
import ChangeEmail from './components/ChangeEmail';
import DisplayUsers from './components/DisplayUsers';
import {deleteAccount, getAllUsers} from './utils';


const App = () => {

  const [storedImages, setStoredImages] = useState([]);
  const [user, setUser] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [allUsers, setAllUsers] = useState(false);
  const [error, setError] = useState(false);
  

    useEffect(() => {
      const getImages= async () => {
        const response = await fetch(
          "https://picsum.photos/v2/list"
        );
        const data = await response.json();
        data.forEach((item) => {
          const url = item.download_url;
          const author = item.author;
          const newImage = { url: url, author: author };
          setStoredImages((storedImages) => [...storedImages, newImage]);
        });
      };
      getImages();
    }, []);

    return (
    <div className={!user ? "App" : "App2"  }>
      <div id = {!user ? "main-container" : "main-container-logged"  }>
      <div id = {!user ? "right-container" : "right-container-logged"  }>
      <h1>Fake-stagram</h1>
      {!user ? (
      signUp ? (
        <SignUp setter={setUser} setSignUp = {setSignUp} error = {error} setError = {setError} />
      ) : (
        <Login setUser={setUser} setSignUp = {setSignUp} error = {error} setError = {setError} />
      )
      ) : (
      <div id="logged-text-content">
      <h1>Welcome {user}!</h1>
      <button className="main-button" onClick = {() => {
        setUser("");
        setError(false);
      }}>Logout</button>
      <button className="main-button" onClick = {() => {
        deleteAccount(user, setUser);
        setError(false);
        setSignUp(false);
        }}>Delete Account!</button>
      <ChangeEmail username={user} />
      <button className="main-button" onClick = {() => getAllUsers(setAllUsers)}>Display All Users</button>
      <div id="all-users-container">
      {allUsers ? (
        allUsers.map((item, index) => {
          return (
            <DisplayUsers
              username={item.username}
              email={item.email}
              key={index}
            />
          );
        })
      ) : (
        <></>
      )}
      </div>
      </div>
      )}
      </div>
      <div id="image-container">
       {storedImages && user ? (
          storedImages.map((item, index) => {
            return (
              <Pic
                url={item.url}
                author={item.author}
                alt="alt text"
                key={index}
              />
            );
          })
        ) : (
          <img id="loginImage" src={require("./images/loginImage.png")} alt="phone with Facebook Messenger open"></img>
        )}
      </div>
      </div>
    </div>
  );
}

export default App;
