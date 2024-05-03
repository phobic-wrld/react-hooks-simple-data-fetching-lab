// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [dogImage, setDogImage] = useState(null);
    const [loading, setLoading]  = useState(true);
    
    useEffect(() => {
        async function fetchDogImage() {
            setLoading(true);
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            setDogImage(data.message);
            setLoading(false);
        }
      fetchDogImage();  
}, [];

return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}  
    </div>
);
}

export default App;
