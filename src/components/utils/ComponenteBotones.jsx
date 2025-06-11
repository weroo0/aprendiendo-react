import React from 'react'
import BtnIniciarSesion from './BtnIniciarSesion'
import BtnCrearCuenta from './BtnCrearCuenta'

export default function ComponenteBotones() {
  return (
    
    <div className="col-12 d-flex flex-column flex-md">
        <BtnCrearCuenta/>
        <BtnIniciarSesion/>
    </div>
  )
}
