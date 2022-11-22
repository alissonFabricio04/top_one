import React, { useEffect, useState } from "react";
import { Toast, ToastHeader, ToastBody } from "reactstrap";
import axios from "axios";
// import { FcClock, FcBusinessman, FcConferenceCall, FcServices, FcCalendar } from "react-icons/fc";
import Navegação from "./components/Navigation";

export const API_URL = "http://localhost:8083";

function App() {
  const [atividades, setAtividades] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/list/today`)
      .then(response => setAtividades(response.data))
      .catch(e => console.log(e))
  }, [])

  const verifyHour = (hour) => {
    const date = new Date().toLocaleTimeString('pt-PT', { hour12: false })
    return date <= hour ? true : false
  };

  return(
    <div>
      <Navegação />
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
          {
            atividades.map(atividade => {
              return verifyHour(atividade.startTime) ?
                (
                  <Toast className="mt-6 m-4" id={atividade.idActivitySession}>
                    <ToastHeader>{atividade.area} {atividade.startTime} - {atividade.endTime}</ToastHeader>
                    <ToastBody>
                      <h4 style={{ fontSize: "1rem" }}>{atividade.name}</h4>
                      <p>{atividade.client ? atividade.client : "Cliente não cadastrado"}</p>
                      <p>{atividade.instructor}</p>
                    </ToastBody>
                  </Toast>
                ) : null
            })
          }
      </div>
    </div>
  )
}

export default App;