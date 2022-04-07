import ItemCount from "./ItemCount.js"
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from '../context/cartContext.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

const ItemDetail = ({item}) => {

    SwiperCore.use([Autoplay]);

    const {addItem} = useContext(contexto)

    let [cantSeleccionada,setCantSeleccionada] = useState(0)
    
    const onAdd = (cantidadSeleccionada) => {
        setCantSeleccionada(cantidadSeleccionada)
        addItem(item,cantidadSeleccionada)
    }

    return (
        <div className='contDetalle'>
            <div className='contFoto'>
                <div className="container-xl sliderHome">
                    <Swiper
                    scrollbar={{ draggable: true }}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    >
                    <SwiperSlide><img src={item.image}></img></SwiperSlide>
                    <SwiperSlide><img src={item.image2}></img></SwiperSlide>
                    <SwiperSlide><img src={item.image3}></img></SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="contData">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p className='price'>{"$"}{item.price}</p>
                <p className="descripcion">{item.description}</p>
                <ItemCount stock={10} onAdd={onAdd} initial={1}/>
                {cantSeleccionada ? (
                    <Link to="../carrito" className='btn-primary btn mt-3 px-4 py-2'>Terminar mi compra</Link>
                ) : (
                    <span></span>
                )}

            </div>
        </div>
    )
}

export default ItemDetail