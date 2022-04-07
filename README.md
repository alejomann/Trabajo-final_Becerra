# Tienda virtual creada durante la cursada de React JS en CoderHouse

Debajo estan los detalles básicos de la aplicación.

La navegación incluye: 
+ Home con productos
+ Pantalla de producto con detalle
+ Pantalla de categorías
+ Pantalla de carrito
+ Pantalla de gracias
+ Pantalla de seguimiento de pedido

Tecnologías y librerías:
+ Interfaz realizada con ReactJS - Create React App
+ Estilos con Bootstrap
+ Ruteo con React Router Dom
+ Base de datos con Firebase
+ Toastify para las notificaciones
+ Swiper para la galería de fotos de los productos

## Link

La aplicación se puede visualizar en el siguiente [Link](https://lacasaca-ecommerce.netlify.app/)

## Instalación

Despues de clonar el repositorio, ejecutar "npm install" para instalar las dependencias

## Ejecutar Proyecto

    1. Ejecute "npm start" en su proyecto para iniciar.
    2. No son necesarias credenciales para ejecutarlo.


## Tipo de aplicación

Este es un Ecommerce, en el cual se simula una tienda de laptops.


## Detalles del proyecto

El usuario puede agregar un producto al carrito tanto desde la home como desde la pantalla de producto.

La barra de navegación muestra la cantidad de items que el usuario ha agregado.

Una vez realizada la compra se le entrega al usuario un número de pedido, el cual puede usar en la sección "Seguimiento" para ver el estado de su pedido

Las categorías del nav bar se cargan dinamicamente de la base de datos (firestore)

En el registro de la orden en la base agregue un campo "seguimiento" para que en un futuro mediante un backend se pueda cambiar ese estado y el usuario pueda verlo desde la sección "Seguimiento"

En el detalle de producto agregue un slider (Swiper) para mostrar varias fotos

## Estructura

![image00](http://alejomann.com/coder/img/estructura.jpg)

## Capturas

Home
![image00](http://alejomann.com/coder/img/home.jpg)

Detalle de producto
![image00](http://alejomann.com/coder/img/detalle.jpg)

Carrito
![image00](http://alejomann.com/coder/img/carrito.jpg)

Gracias
![image00](http://alejomann.com/coder/img/gracias.jpg)

Seguimiento
![image00](http://alejomann.com/coder/img/seguimiento1.jpg)
![image00](http://alejomann.com/coder/img/seguimiento2.jpg)