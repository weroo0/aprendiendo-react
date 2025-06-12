import React, { useState } from 'react'

export default function Ejercicio03() {

  //varibale
  let numero = 0;
  
  //hook
  const [numerito, setNumerito] = useState(0)
  
  //funcion
  const sumar = () =>{
    setNumerito(numerito +1);
  }

  const restar = () =>{
    setNumerito(numerito -1);
  }

  const reiniciar = () =>{
    setNumerito(0);
  }
  return (

    <div className="row mt-4">
        <div className="col-12">
            <h2 className="h4 mt-4">
                Ejercicio 3 - Funciones y contador
            </h2>
            <hr />
        </div>

        <div className="col-12 text-center">
            <p className="h1">{numerito}</p>

            <div className="col-12">
                <button className="w-25 btn btn-success  fw-bold" onClick={sumar}>Sumar</button>
                <button className="w-25 btn btn-danger  fw-bold ms-3" onClick={reiniciar}>Reiniciar</button>
                <button className="w-25 btn btn-warning  fw-bold ms-3" onClick={restar}>Restar</button>
            </div>
        </div>

    </div>

    //EJERCICIO 4: SIMILAR A ESTO, BOTON SALUDAR Y OTRO DESPEDIR, SI LE PONES SALUDAR SALUDE Y VICEVERSA, ESTADO INICIAL = JIJIJA
  )
}
