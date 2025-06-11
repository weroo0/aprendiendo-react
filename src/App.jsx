import Ejercicio01 from "./components/ejercicio01"
import Ejercicio02 from "./components/Ejercicio02"
import BotonGenerar from "./components/utils/BotonGenerar"
import ComponenteBotones from "./components/utils/ComponenteBotones"

function App() {
  

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-2 text-center alert alert-success">Hola</h1>
          </div>
        </div>

        {/** Mando a llamar a otro componente externo */}
        <Ejercicio01/>
        <BotonGenerar/>
        <ComponenteBotones/>
        <Ejercicio02/>

      </div>

      
      
    </>
  )
}

export default App
