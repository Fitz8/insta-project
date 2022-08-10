import './App.css';
import { useState, useEffect } from "react";
import Pic from "./components/Pic";
import Login from './components/Login';

const App = () => {

  const [storedImages, setStoredImages] = useState([]);
  const [user, setUser] = useState("");

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
    <div className="App">
      <h1>{user}</h1>
      <Login setter={setUser} />
       {storedImages ? (
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
          //Display 'loading' if there is no data from the api yet
          <h2>Loading...</h2>
        )}
    </div>
  );
}

export default App;
