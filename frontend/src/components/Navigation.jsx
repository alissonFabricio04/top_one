import React from "react";
import logo from "./img/logo.png"

// #82e13a

function Navegação() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark" style={{background: "#d6cf05"}}>
        <img src={logo} alt="" width={"60"} />
      </nav>
    </div>
  );
}

export default Navegação;