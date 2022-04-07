import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { contexto } from '../context/cartContext.js'

const Gracias = () => {

  const {mostrarNumeroPedido} = useContext(contexto)

  return (
    <>
      <div className='contGracias'>
        <p>Tu pedido fue realizado con éxito!</p>
        <div className='numeroPedido'>
          <p>Número de pedido:<br/><b>{mostrarNumeroPedido()}</b></p>
        </div>
        <p className='segui'>Podés seguir el estado de tu pedido desde la sección <NavLink to={"/Seguimiento"}>Seguimiento</NavLink></p>
      </div>
    </>
    
  )
}

export default Gracias