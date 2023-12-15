import React from "react"

function Form(){
    return(
        <>
        <h1>Calculadora de cuotas</h1>
        <div className="divForm">
           <label>Cantidad del préstamo  </label>
            <input></input>
            <br/><br/>
           <label>Tipo de interés  </label>
            <input></input>
            <br/><br/>
           <label>Número de cuotas  </label>
            <input></input>
            <br/><br/>
        </div>
        <div className="divForm">
          <p>
            Su cuota total es de <p id="resultado"></p>
          </p>
        </div>
        </>
    )
}

export default Form;