
/*------------------Delegacion de eventos------------------ */
//Evita propagacion de eventos


// const cajas = document.querySelectorAll('.border');
// cajas.forEach( item =>{
//     item.addEventListener('click', (e)=>{
//         e.stopPropagation();
//         console.log("me diste click ");
//     })
// })

const container = document.querySelector('.container');
container.addEventListener('click', e =>{
    // console.log(e.target.id);

    if(e.target.id === "padre"){
        console.log("diste click a padre");
    }
    


    if(e.target.matches('.border-secondary')){
        console.log("diste click al hijo");
    }


    if(e.target.dataset.div === "divNieto"){
        console.log("diste click a nieto");
    }

})