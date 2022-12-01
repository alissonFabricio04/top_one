import React from "react";
import logo from "./img/logo.png"

// #82e13a

function Navegação() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark mb-5" style={{background: "#8B008B"}}>
        <img src={logo} alt="" width={"60"} />
      </nav>
    </div>
  );
}

export default Navegação;