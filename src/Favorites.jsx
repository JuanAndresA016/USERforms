import React, { useEffect, useState } from "react";
import { spotifyAPI } from "./api/spotifyAPI";
import "./styles.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const userId = localStorage.getItem("user");

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!userId) return;

      try {
        const url = `http://localhost:3000/api/users/id/${userId}/favorites`;
        const data = await spotifyAPI(url, "GET", null, null);
        setFavorites(data?.items || []);
        console.log(data);
      } catch (error) {
        console.error("Error fetching favorites", error);
      }
    };

    fetchFavorites();
  }, [userId]);

  const handleDeleteFavorite = async (songId) => {
    try {
      const url = `http://localhost:3000/api/users/${userId}/favorites/${songId}`;
      await spotifyAPI(url, "DELETE", null, null);
      setFavorites((prev) => prev.filter((fav) => fav.id !== songId));
    } catch (error) {
      console.error("Error deleting favorite", error);
    }
  };

  if (!userId) {
    return <p>Debes iniciar sesión para ver tus favoritos</p>;
  }

  return (
    <div className="spotify">
      <h1>Mis Favoritos</h1>
      {favorites.length === 0 ? (
        <p>No tienes canciones favoritas</p>
      ) : (
        favorites.map((fav) => (
            
          <div key={fav.id} style={{ marginBottom: "20px" }}>
            {fav.album?.images?.[0]?.url && (
              <img src={fav.album.images[0].url} alt={fav.name} width={150} />
            )}
            <p>{fav.artists?.map((a) => a.name).join(", ")}</p>
            <button className="button" onClick={() => handleDeleteFavorite(fav.id)}>
              Eliminar favorito
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;




