import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { db } from "../firebase"
import { collection, getDocs, query, where } from "firebase/firestore";
import { toast } from "react-toastify";
import ItemDetail from "./ItemDetail.js"

const ItemDetailContainer = () => {

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const {idProducto} = useParams()

  useEffect(()=>{

    const productosCollection = collection(db, "productos")
    const filtroProductos = query(productosCollection, where("id", "==", Number(idProducto)));
    const filtrado = getDocs(filtroProductos)

    filtrado
      .then((resultado)=>{
          setItem(resultado.docs[0].data())
      })
      .catch(()=>{
        toast.error("Error al cargar los productos")
      })
      .finally(()=>{
          setLoading(false)
      }) 
  
  },[idProducto])
  
  if(loading){
    return <h1>Cargando...</h1>
  }else{
    return (
        <ItemDetail item={item}/>
    )
  }
}  

export default ItemDetailContainer