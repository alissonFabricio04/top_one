import React from "react";
import logo from "./img/logo.png"
import moment from "moment"



function Navegação() {

  const hora = moment().format('HH:mm');

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark" style={{ background: "#d6cf05" }}>
        <img src={logo} alt="" width={"60"} />
      </nav>
      <div style={{ position: "fixed", top: "5%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <strong style={{ fontSize: "2rem" }} >{hora}</strong>
      </div>
    </div>
  );
}

export default Navegação;