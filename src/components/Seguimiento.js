import { db } from "../firebase"
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from 'react'

const Seguimiento = () => {

    const [numorden, setNumorden] = useState()
    const [loading, setLoading] = useState(true);
    const [estado, setEstado] = useState()

    const handleCambio = (event) => {
        setNumorden(Number(event.target.value))
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        const productosCollection = collection(db, "ordenes")
        const filtroProductos = query(productosCollection, where("id", "==", Number(numorden)));
        const consulta = getDocs(filtroProductos)

        consulta
            .then((resultado)=>{
                const arrayResultados = resultado.docs.map((doc) => {
                    return doc.data()
                });
                setEstado(arrayResultados[0].estado) 
            })
            .catch(()=>{
                setEstado("No se encontraron resultados.")
            })
            .finally(()=>{
                setLoading(false)
            })
    }


    if(loading){
        return (
            <>
                <div className='contGracias'>
                    <h1>Seguimiento</h1>
                    <form className='form-seguimiento' onSubmit={enviarDatos}>
                        <label className='mb-1'>Número de pedido:</label>
                        <input type="number" className='mb-3 rounded p-1 field' name="orden" onChange={handleCambio} ></input>
                        <input type="submit" className='btn btn-primary b-none' value="BUSCAR"></input>
                    </form>
                </div>
            </>
        )
    }else{
        return (
            <>
                <div className='contGracias'>
                    <h1>Pedido número: {numorden}</h1>
                    <h3 className="mt-4">{estado}</h3>
                </div>
            </>
        )
    }

}

export default Seguimiento