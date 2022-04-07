import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from './components/Cart'
import Gracias from './components/Gracias'
import Seguimiento from './components/Seguimiento'
import { Route, Routes } from 'react-router-dom'

const Main = () => {
  return (
    <main>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
          <Route path="/producto/:idProducto" element={<ItemDetailContainer/>} />
          <Route path="/carrito" element={<Cart/>} />
          <Route path="/gracias" element={<Gracias/>} />
          <Route path="/seguimiento" element={<Seguimiento/>} />
        </Routes>
    </main>
  )
}

export default Main