import React from "react";

function Opciones(){
    return (
    <div id="orden">
        <h1>Soy el enlace opciones</h1>
      
        <div id="container">
        <div><h2>Soy el contenedor mayor</h2></div>
        <div>
        <div className="contenedorS">Esta es la caja pequeña</div>
            <div className="contenedorS" id="estilo1">Esta es la caja pequeña</div>
            <div className="contenedorS">Esta es la caja pequeña</div>
            <div className="contenedorS" id="estilo">Esta es la caja pequeña</div>
            <div className="contenedorS" id="estilo5">Esta es la caja pequeña</div>
            <div className="contenedorS" id="estilo4">Esta es la caja pequeña</div>
        </div></div>
    </div>)
}

export default Opciones;