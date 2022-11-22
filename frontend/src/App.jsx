import React, { useEffect, useState } from "react";
import axios from "axios";
import Navegação from "./components/Navigation";

export const API_URL = "http://localhost:8083";

function App() {
  const [atividades, setAtividades] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/list/today`)
      .then(response => setAtividades(response.data))
      .catch(e => console.log(e))
  }, [])

  return(
    <div>
      <Navegação />
      <input type="text" placeholder="teste" className="form-control" />
      {atividades.map(atividade => <li>{ atividade.idActivitySession }</li>)}
    </div>
  )
}

export default App;