const colorImput = document.getElementById("imputColor");
const btnVisualizar = document.getElementById("btnVisualizar");
const parrafo = document.getElementById("parrafo");
const card = document.querySelector(".card")



btnVisualizar.addEventListener("click", () =>{
   var color = colorImput.value;
   parrafo.innerHTML= color;
   card.style.backgroundColor = color;
   btnVisualizar.style.backgroundColor = color;

   navigator.clipboard.writeText(color)
   .then(res => console.log("Copy successful!" + color)) // triggered if copied successfully
   .catch(err => console.log("Copy failed: " + err))


  

})

// $('#change-color').colorpicker().on('changeColor', function(e) {
//    console.log( e.color.toString('rgba'));
//    var background_color = e.color.toString('rgba');
//    $('body')[0].style.backgroundColor = background_color;