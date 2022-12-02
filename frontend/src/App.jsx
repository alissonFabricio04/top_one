import React, { useEffect, useState } from "react";
import Quadras from "./components/Quadras";
import axios from "axios";
import Navegação from "./components/Navigation";
import "./index.css"

export const API_URL = "http://localhost:8081";

function App() {
  const [backhand, setBackhand] = useState([])
  const [smash, setSmash] = useState([])
  const [forehand, setForehand] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/list/today`)
      .then(response => {
        setBackhand(response.data.backhand)
        setSmash(response.data.smash)
        setForehand(response.data.forehand)
        console.log(response.data)
      })
      .catch(e => console.log(e))
  }, [])

  setTimeout(() => {
    window.location.reload()
  }, 600000);

  return (
    <div style={{ backgroundColor: "#f2f6f6" }}>
      <Navegação />
      <div style={{ display: "flex", justifyContent: "center", marginRight: "2rem" }}>
        <strong style={{ position: "fixed", top: "10%", left: "16.5%" }}>BACKHAND</strong>
        <div>
          {backhand.map(atividade => <Quadras atividade={atividade} />)}
        </div>
        <strong style={{ position: "fixed", top: "10%", left: "48%" }}>SMASH</strong>
        <div>
          {smash.map(atividade => <Quadras atividade={atividade} />)}
        </div>
        <strong style={{ position: "fixed", top: "10%", left: "76.9%" }}>FOREHAND</strong>
        <div>
          {forehand.map(atividade => <Quadras atividade={atividade} />)}
        </div>
      </div>
    </div>
  )
}

export default App;