const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const boton = document.querySelectorAll(".card .btn");
const fragment = document.createDocumentFragment();

const carritoObj = [];

const agregarFruta = (e) => {
    const fruta = {
        nombre : e.target.dataset.fruta,
        id : e.target.dataset.fruta,
        cantidad : 1
    };

    const index = carritoObj.findIndex((item)=> item.id === fruta.id);

    console.log(index);
    if(index === -1){
        carritoObj.push(fruta);
    }else{
        carritoObj[index].cantidad ++;
    }
   
    console.log(carritoObj)
    /
    renderLista(carritoObj);

};

const renderLista = (carritoObj) =>{
    
    carrito.textContent = "";
    carritoObj.forEach(item =>{
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.nombre;
        clone.querySelector(".badge").textContent = item.cantidad;
        fragment.appendChild(clone);
    })

    carrito.appendChild(fragment);
} 

Object.values(boton).forEach(btn =>{ btn.addEventListener("click", agregarFruta)})



