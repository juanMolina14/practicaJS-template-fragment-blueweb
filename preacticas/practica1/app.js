const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const footer = document.querySelector("#footer");
const templateFooter = document.querySelector("#templateFooter");
const fragment = document.createDocumentFragment();


document.addEventListener('click', e =>{
    //console.log(e.target.matches(".card .btn-outline-primary"));
    if(e.target.matches(".card .btn-outline-primary")){
        //console.log("Ejecutar agregar al acarro");
        agregarFruta(e);
    }

    if(e.target.matches("#aumentar")){
        btnAumentar(e);
    }

    if(e.target.matches("#quitar")){
        btnQuitar(e);
    }

})
let carritoObj = [];

const agregarFruta = (e) => {
    const fruta = {
        nombre : e.target.dataset.fruta,
        id : e.target.dataset.fruta,
        cantidad : 1,
        precio : parseInt(e.target.dataset.precio),
    };

    //console.log(fruta);

    const index = carritoObj.findIndex((item)=> item.id === fruta.id);

    // console.log(index);
    if(index === -1){
         carritoObj.push(fruta);
    }else{
         carritoObj[index].cantidad ++;
        //  carritoObj[index].precio = carritoObj[index].cantidad * fruta.precio;
    }
   
     console.log(carritoObj)

    renderLista();

};

const renderLista = () =>{
    
    carrito.textContent = "";

    carritoObj.forEach(item =>{
        const clone = template.content.cloneNode(true);
        clone.querySelector("#tagNombre").textContent = item.nombre;
        clone.querySelector(".badge").textContent = item.cantidad;
        clone.querySelector("#monto").textContent = item.precio * item.cantidad;

        clone.querySelector(".btn-danger").dataset.id = item.id;
        clone.querySelector(".btn-success").dataset.id = item.id;
        fragment.appendChild(clone);
    })

    carrito.appendChild(fragment);
    pintarFooter();
};

const pintarFooter = () =>{

    footer.textContent = "";
    const total = carritoObj.reduce(
        (acc,current)=> acc + current.cantidad * current.precio, 0 );

        const clone = templateFooter.content.cloneNode(true);
        clone.querySelector("#total").textContent = total;
        footer.appendChild(clone)

        
}

const btnAumentar = e =>{
    carritoObj = carritoObj.map((item) => {
        if(item.id === e.target.dataset.id){
            item.cantidad++;
        }
        return item;
    });
    renderLista();
};

const btnQuitar = e => {
    carritoObj = carritoObj.filter(item => {
        if(item.id === e.target.dataset.id){
            if(item.cantidad >0){
                item.cantidad --;
                if(item.cantidad=== 0) return;
                return item;
            }
        }
        return item;
    });
    renderLista();

}





