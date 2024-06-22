// src/components/RandomCatPhoto.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RandomPhoto.css";

interface CatPic {
  url: string;
}

const RandomPhoto: React.FC = () => {
  const [catPhoto, setCatPhoto] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCatPhoto = async () => {
    setLoading(true);
    try {
      const response = await axios.get<CatPic[]>("https://api.thecatapi.com/v1/images/search");
      setCatPhoto(response.data[0].url);
    } catch (error) {
      console.error("Error fetching the cat photo:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatPhoto();
  }, []);

  return (
    <div className="container">
      <h1>MANG MANG OCEAN</h1>
      <header>
        <button className="top-button" onClick={fetchCatPhoto} disabled={loading}>
          {"M A N G !"}
        </button>
      </header>
      <main className="content">
        {catPhoto ? <img src={catPhoto} alt="Random Cat" /> : <p>Loading...</p>}
      </main>
    </div>
  );
};

export default RandomPhoto;
