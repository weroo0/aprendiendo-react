import React, { useState } from 'react'

export default function Ejercicio04() {
  
  //variable
  let nombre = "Luis"

  //hook
  const[saludo, setSaludo] = useState('jijijija')
  
  //funcion
  const saludar = () =>{
    setSaludo(`Holaaaa ${nombre} :D`)
  }

  const despedir = () =>{
    setSaludo(`Adiosss ${nombre} :(`)
  }
  return (
    <div className="row mt-4">
        <div className="col-12">
            <h2 className="h4 mt-4">
                Ejercicio 4 - Saludo y despedida
            </h2>
            <hr />
        </div>

        <div className="col-12 text-center">
            <p className="h1">{saludo}</p>

            <div className="col-12">
                <button className="w-25 btn btn-success fw-bold mb-2" onClick={saludar}>Saludar</button>
                <button className="w-25 btn btn-warning fw-bold ms-3 mb-2" onClick={despedir}>Despedir</button>
            </div>
        </div>
    </div>


  )
}
