import React, { useEffect, useState } from "react";
import { Toast, ToastHeader, ToastBody } from "reactstrap";
import { verifyLocal } from "./util/verifyLocal";
import axios from "axios";
import Navegação from "./components/Navigation";
import { verifyHour } from "./util/verifyHour";

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

  return (
    <div style={{ background: "#DCDCDC" }}>
      <Navegação />      
      <div style={{ display: "flex", marginLeft: "3rem" }}>        
        <div>
        <hr />       
          {
            backhand.map(atividade => {
              return (
                <div>
                  {verifyHour(atividade.date) ?
                    <Toast className="mt-5 mb-2 ms-5 me-3" id={atividade.idActivitySession}>
                      {verifyLocal(atividade.area, atividade.startTime, atividade.endTime)}
                      <ToastBody>
                        <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Atividade: {atividade.name}</p>
                        <p style={{ fontSize: "1rem",  fontStyle: "italic"}}>Cliente: {atividade.client ? atividade.client : "Cliente não cadastrado"}</p>
                        <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Instrutor: {atividade.instructor}</p>
                      </ToastBody>                                
                    </Toast> : null}                                                       
                </div>
              )
            })
          }         
        </div>        
        <div>
        <hr />            
          {
            smash.map(atividade => {
              return (
                <div>
                  {verifyHour(atividade.date) ?
                    <Toast className="mt-5 mb-2 ms-5 me-3 " id={atividade.idActivitySession}>
                      {verifyLocal(atividade.area, atividade.startTime, atividade.endTime)}
                      <ToastBody>
                        <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Atividade: {atividade.name}</p>
                        <p style={{ fontSize: "1rem", fontStyle: "italic"}}>Cliente: {atividade.client ? atividade.client : "Cliente não cadastrado"}</p>
                        <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Instrutor: {atividade.instructor}</p>
                      </ToastBody>
                    </Toast> : null}                    
                </div>
              )
            })
          }
        </div>
        <div>
        <hr />        
          {
            forehand.map(atividade => {
              return (
                <div>
                  {verifyHour(atividade.date) ?
                    <Toast className="mt-5 mb-2 ms-5 me-3 " id={atividade.idActivitySession}>
                      {verifyLocal(atividade.area, atividade.startTime, atividade.endTime)}
                      <ToastBody>
                        <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Atividade: {atividade.name}</p>
                        <p style={{ fontSize: "1rem", fontStyle: "italic"}}>Cliente: {atividade.client ? atividade.client : "Cliente não cadastrado"}</p>
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