import { useNavigate } from "react-router";
import "./App.css";
import "./styles.css";
import { getToken } from "./getToken";

import { authFlow, getDataAuth } from "./setup";
import { use, useEffect } from "react";
import { spotifyAPI } from "./api/spotifyAPI";

function App() {
  const navigate = useNavigate();
  const handleSetup = async () => {
    const code = await getDataAuth();
    authFlow(code);
  };

  const handleGetToken = () => {
    getToken();
    navigate("/dashboard");
  };
  

  const getUsers = async () => {
    const url = "http://localhost:3000/api/users";
    const res = await spotifyAPI(url, "GET", null);
    console.log(res);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="spotify">
        <h1>Hola Mund34</h1>
        <button className="button"onClick={handleSetup}>START SETUP </button>
        <button className="button"onClick={handleGetToken}>GET TOKEN </button>
      </div>
    </>
  );
}

export default App;
