import React, { useEffect, useState } from "react";
import { Toast, ToastHeader, ToastBody } from "reactstrap";
import { verifyHour } from "./util/verifyHour";
import { verifyLocal } from "./util/verifyLocal";
import axios from "axios";

import Navegação from "./components/Navigation";

export const API_URL = "http://localhost:8081";

function App() {
  const [atividades, setAtividades] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/list/today`)
      .then(response => setAtividades(response.data))
      .catch(e => console.log(e))
  }, [])

  return (
    <div>
      <Navegação />
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
        {
          atividades.map(atividade => {
            return verifyHour(atividade.startTime) ?
              (
                <Toast className="mt-5 ms-5 bg-" id={atividade.idActivitySession}>
                  {verifyLocal(atividade.area, atividade.startTime, atividade.endTime)}
                  <ToastBody>
                    <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Atividade: {atividade.name}</p>
                    <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Cliente: {atividade.client ? atividade.client : "Cliente não cadastrado"}</p>
                    <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Instrutor: {atividade.instructor}</p>
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