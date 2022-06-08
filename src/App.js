import React, { useEffect, useState } from "react";
import "./App.css";
import Images from "./components/Images";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImages(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Images data={images} />
    </div>
  );
}

export default App;
