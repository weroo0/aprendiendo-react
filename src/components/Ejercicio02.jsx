import React from 'react'

const Ejercicio02 = () => {
    //Logica de componente

    //1- Variable / constante

    //2- Hooks

    //3- Funciones

    const nombreProducto = 'Smart Tv 90"';

    function agregarACarritoDeCompras (){
        console.log('El producto:', nombreProducto, " Se agrego al carrito");
    }

    function borrarDeCarritoDeCompras (){
        console.log('El producto:', nombreProducto, " se ha borrado correctamente");
    }

    return (

    <div className="row mt-4">
        <div className="col-12">
            <h2 className="h4 mt-4">
                Ejercicio 2 - Botón y funciones
            </h2>
            <hr />
            
        </div>
        
        <button className='w-25 btn btn-primary' onClick={agregarACarritoDeCompras}>
            <i class="bi bi-bag-plus"></i>
            <span className="ms-2">Agregar Articulo</span>
        </button>
        <button className='w-25 btn btn-danger ms-4' onClick={borrarDeCarritoDeCompras}>
            <i class="bi bi-bag-x-fill"></i>
            <span className="ms-2">Borrar Articulo</span>
        </button>
        
        
    </div>
  );
};

export default Ejercicio02
