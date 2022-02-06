import "./App.css";
import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import awotexLogo from "./assets/images/awotex.png";
import HomePage from "./pages/HomePage";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loadingContainer">
            <img src={awotexLogo} className="loadingLogoImage" alt="loading" />
        <PacmanLoader loading={loading} size={25} color={"#f831ff"}  />
        </div>
      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default App;
