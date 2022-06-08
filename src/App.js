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
        console.log(data);
        setImages(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="tu">
      <Images data={images} />
    </div>
  );
}

export default App;
