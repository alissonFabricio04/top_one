import React, { useEffect, useState } from "react";
import Quadras from "./components/Quadras";
import axios from "axios";
import Navegação from "./components/Navigation";
import moment from "moment";
import { verifyHour } from "./util/verifyHour";
import "./index.css"

export const API_URL = "http://localhost:8081";

function App() {
  const [backhand, setBackhand] = useState([])
  const [smash, setSmash] = useState([])
  const [forehand, setForehand] = useState([])
  const [tennis, setTennis] = useState("backhand")
  const tennis2 = ["backhand", "smash", "forehand"]

  useEffect(() => {
    axios.get(`${API_URL}/list/today`)
      .then(response => {
        setBackhand(response.data.backhand)
        setSmash(response.data.smash)
        setForehand(response.data.forehand)
      })
      .catch(e => console.log(e))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(tennis)
      setTennis(tennis2[Math.floor(Math.random() * 3)])
    }, 10000)

    return () => clearInterval(interval);
  }, []);

  setTimeout(() => {
    window.location.reload()
  }, 60000);

  // for (let index = 0; index < tennis2.length; index++) {
  //     tennis.push(inde)
  // }

  const verifyAct = (Quadra) => {
    for (let index = 0; index <= 3; index++) {
      if (Quadra === "backhand") {
        return <Quadras atividade={backhand} nome="BACKHAND" corFundo="#6B8E23" />
      } else if (Quadra === "smash") {
        return <Quadras atividade={smash} nome="SMASH" corFundo="#C86800" />
      } else if (Quadra === "forehand") {
        return <Quadras atividade={forehand} nome="FOREHAND" corFundo="#4D2400" />
      }
    }
  }

  // for (let index = 0; index <= 3; index++) {
  //   if(index === 3) {
  //     index = 0
  //   }
  //   // tennis2.map((valor) => {
  //     setTimeout(() => {
  //       console.log(tennis)
  //       tennis = tennis2[index]
  //     }, 1000)
  //   // }) 
  // }

  return (
    <div className="body">
      { verifyAct(tennis) }
      {/* <div style={{ display: "flex", justifyContent: "center", marginRight: "2rem" }}>
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
      </div> */}

      {/* <Quadras atividade={backhand} nome="BACKHAND" corFundo="#6B8E23" /> */}
      {/* <Quadras atividade={smash} nome="SMASH" corFundo="#C86800" />
      <Quadras atividade={forehand} nome="FOREHAND" corFundo="#4D2400" /> */}
    </div>
  )
}

export default App;