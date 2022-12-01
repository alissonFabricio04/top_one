import React, { useEffect, useState } from "react";
import { Toast, ToastHeader, ToastBody } from "reactstrap";
import { verifyLocal } from "./util/verifyLocal";
import axios from "axios";
import Navegação from "./components/Navigation";
import { verifyHour } from "./util/verifyHour";
import tennis from "../public/tennis-g117e33e22_1920.jpg"
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
  }, 60000);

  return (
    <div style={{ backgroundColor: "#f2f6f6" }}>
      {/* backgroundImage: `url(${tennis})`, backgroundRepeat: "no-repeat" */}
      <Navegação />
      <div style={{ display: "flex" }}>
        <div>
          {
            backhand.map(atividade => {
              return (
                <div style={{ marginTop: "3rem"}}>
                  {verifyHour(atividade.date) ?
                    <Toast style={{border: "1px solid #f1f1f1"}} className="mb-2 ms-5 me-3" id={atividade.idActivitySession}>
                      {verifyLocal(atividade.area, atividade.startTime, atividade.endTime)}
                      <ToastBody>
                        <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Atividade: {atividade.name}</p>
                        <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Cliente: {atividade.client ? <strong>{atividade.client}</strong> : <span style={{ color: "red" }}>Cliente não cadastrado</span>}</p>
                        <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Instrutor: {atividade.instructor}</p>
                      </ToastBody>
                    </Toast> : null}
                </div>
              )
            })
          }
        </div>
        <div>
          {
            smash.map(atividade => {
              return (
                <div style={{ marginTop: "3rem" }}>
                  {verifyHour(atividade.date) ?
                    <Toast style={{border: "1px solid #f1f1f1"}} className=" mb-2 ms-5 me-3 " id={atividade.idActivitySession}>
                      {verifyLocal(atividade.area, atividade.startTime, atividade.endTime)}
                      <ToastBody>
                        <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Atividade: {atividade.name}</p>
                        <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Cliente: {atividade.client ? <strong>{atividade.client}</strong> : <span style={{ color: "red" }}>Cliente não cadastrado</span>}</p>
                        <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Instrutor: {atividade.instructor}</p>
                      </ToastBody>
                    </Toast> : null}
                </div>
              )
            })
          }
        </div>
        <div>
          {
            forehand.map(atividade => {
              return (
                <div style={{  marginTop: "3rem" }}>
                  {verifyHour(atividade.date) ?
                    <Toast style={{border: "1px solid #f1f1f1"}} className="mb-2 ms-5 me-3 " id={atividade.idActivitySession}>
                      {verifyLocal(atividade.area, atividade.startTime, atividade.endTime)}
                      <ToastBody>
                        <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Atividade: {atividade.name}</p>
                        <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Cliente: {atividade.client ? <strong>{atividade.client}</strong> : <span style={{ color: "red" }}>Cliente não cadastrado</span>}</p>
                        <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Instrutor: {atividade.instructor}</p>
                      </ToastBody>
                    </Toast> : null}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App;