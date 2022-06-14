const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const boton = document.querySelectorAll(".card .btn");
const fragment = document.createDocumentFragment();

const carritoObj = {};

const agregarFruta = (e) => {
    const fruta = {
        nombre : e.target.dataset.fruta,
        id : e.target.dataset.fruta,
        cantidad : 1
    };

    if(carritoObj.hasOwnProperty(fruta.nombre)){
        fruta.cantidad = carritoObj[fruta.nombre].cantidad +1;
    }
    
    carritoObj[fruta.nombre] = fruta;
    
    renderLista(fruta);

};

const renderLista = (fruta) =>{
    
    carrito.textContent = "";
    Object.values(carritoObj).forEach(item =>{
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.nombre;
        clone.querySelector(".badge").textContent = item.cantidad;
        fragment.appendChild(clone);
    })

    carrito.appendChild(fragment);
} 

Object.values(boton).forEach(btn =>{ btn.addEventListener("click", agregarFruta)})





























// const carrito = document.querySelector("#carrito");
// const template = document.querySelector("#template");
// const boton = document.querySelectorAll(".card .btn");
// const fragment = document.createDocumentFragment();

// const carritoObj = {};

// const agregarProducto = (e) => {
//     const fruta ={
//         nombre : e.target.dataset.fruta,
//         id : e.target.dataset.fruta,
//         cantidad : 1
//     }

//     if(carritoObj.hasOwnProperty(fruta.nombre)){
//         fruta.cantidad = carritoObj[fruta.nombre].cantidad + 1;
//     }
//     console.log(fruta.cantidad)

//     carritoObj[fruta.nombre] = fruta;
    
//     mostrarEnPantalla(fruta);

// }

// const mostrarEnPantalla = (fruta) =>{


//     carrito.textContent = "";
//     Object.values(carritoObj).forEach(item => {
//         const clone = template.content.firstElementChild.cloneNode(true);
//         clone.querySelector(".lead").textContent = item.nombre;
//         clone.querySelector(".badge").textContent = item.cantidad;
//         fragment.appendChild(clone);

//     })

//     carrito.appendChild(fragment); 
    
// }

// boton.forEach(btn => btn.addEventListener("click", agregarProducto))

