import react, { useState, useEffect } from "react";
import "./styles.css";
import Navbar from "./Components/Navbar";
//import { css } from "@emotion/react";
import { PropagateLoader } from "react-spinners";

export default function App() {
  const [loading, setLoding] = useState(false);
  const override = CSS`
  display:block;
  border-color:red;
  margin-top:20%;`;

  useEffect(() => {
    setLoding(true);
    setTimeout(() => {
      setLoding(false);
    }, 5000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <PropagateLoader
          color={"#3d2514"}
          loading={"loading"}
          css={"override"}
          size={40}
        />
      ) : (
        <>
          <Navbar />
        </>
      )}
    </div>
  );
}
