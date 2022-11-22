import React from "react";
import logo from "./img/logo.png"



function Navegação() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark" style={{background: "#FFDEAD"}}>
        <img src={logo} alt="" width={"70"} />
      </nav>
    </div>
  );
}

export default Navegação;