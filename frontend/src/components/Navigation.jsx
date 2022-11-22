import React from "react";
import logo from "./img/logo.png"

// #82e13a

function Navegação() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark" style={{background: "#70c232"}}>
        <img src={logo} alt="" width={"70"} />
      </nav>
    </div>
  );
}

export default Navegação;