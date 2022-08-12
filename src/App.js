import './App.css';
import { useState, useEffect } from "react";
import Pic from "./components/Pic";
import SignUp from './components/SignUp';
import Login from './components/Login';
import ChangeEmail from './components/ChangeEmail';
import DisplayUsers from './components/DisplayUsers';
import {deleteAccount} from './utils';


const App = () => {

  const [storedImages, setStoredImages] = useState([]);
  const [user, setUser] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [allUsers, setAllUsers] = useState(false);
  const [error, setError] = useState(false);
  const [displayImages, setDisplayImages] = useState(false);
  const [displayUsers, setDisplayUsers] = useState(false);
 
  

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

      const getAllUsers = async () => {
        try {
            const response = await fetch("http://localhost:5001/user", {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        });
        const data = await response.json();
        setAllUsers(data);
    
        console.log(data);
        } catch(error) {
            console.log(error);
        }
    }
      getImages();
      getAllUsers();
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
        setDisplayUsers(false);
        setDisplayImages(false);
      }}>Logout</button>
      <button className="main-button" onClick = {() => {
        deleteAccount(user, setUser);
        setError(false);
        setSignUp(false);
        setDisplayUsers(false);
        setDisplayImages(false);
        }}>Delete Account!</button>
      <ChangeEmail username={user} />
      <button className="main-button" onClick={() => setDisplayUsers(!displayUsers)}>Display All Users</button>
      <button className="main-button" onClick={() => setDisplayImages(!displayImages)}>View Image Feed</button>
      <div id="all-users-container">
      {allUsers && displayUsers ? (
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
       {storedImages && user && displayImages ? (
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
          <></>
        )}
        <img id="loginImage" src={require("./images/loginImage.png")} alt="phone with Facebook Messenger open" style={{display: user ? "none" : "block"}}></img>
      </div>
      </div>
    </div>
  );
}

export default App;
