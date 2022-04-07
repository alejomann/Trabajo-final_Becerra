import CartWidget from "./CartWidget.js"
import { Link, NavLink } from "react-router-dom";
import { db } from "../firebase"
import { collection, getDocs} from "firebase/firestore";
import { useState, useEffect } from "react"
import { toast } from "react-toastify";

const NavBar = ({cantidad,total}) => {

  const [loading, setLoading] = useState(true)
  const [categorias, setCategorias] = useState([])


  useEffect(() => {
    
    const productosCollection = collection(db, "productos")
    const consulta = getDocs(productosCollection)

    consulta
    .then((resultado)=>{
        const arrayCategorias = resultado.docs.map((doc) => {
            return doc.data().category
        });
        const arrayCategoriasUnicas = arrayCategorias.filter((item,index)=>{
          return arrayCategorias.indexOf(item) === index;
        })
        setCategorias(arrayCategoriasUnicas)
    })
    .catch(()=>{
      toast.error("Error al cargar los productos")
    })
    .finally(()=>{
      setLoading(false)
    })

  },[])


 

  


    if(loading){
      return <h1>Cargando...</h1>
    }else{
      return (
        <nav className="navbar ms-auto">
            <ul className="d-flex align-items-center m-0">
              {/* Armo el menu trayendo las categorias de la base */}
              {
                categorias.map((categoria)=>{
                  return <li className="mx-1 text-capitalize" key={categoria}><NavLink to={`/categoria/${categoria}`} className="text-white py-2 px-3">{categoria}</NavLink></li>
                })
              }
            </ul>
            <Link to="../carrito" className='contProfile ms-4 d-flex align-items-center'>
              <CartWidget cantidad={cantidad} total={total} />
            </Link>
            <div className='contProfile'>
              <NavLink to="/carrito" className='login py-2 px-3'><small>SALIR</small></NavLink>
            </div>
        </nav> 
      )
    }


}

export default NavBar