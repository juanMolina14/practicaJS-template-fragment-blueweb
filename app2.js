const lista = document.querySelector("#lista");
const fragment = document.createDocumentFragment()
const liTemplate = document.querySelector("#liTemplate");

const arrayPaises = ["Argentina","Chile", "Peru"];

const clickPaises = (e) => console.log("Diste click a " , e.target.textContent);

arrayPaises.forEach(pais =>{
    const clone = liTemplate.content.firstElementChild.cloneNode(true);
    clone.querySelector(".text-primary").textContent = pais;

    clone.addEventListener("click", clickPaises);

    fragment.appendChild(clone);
});

lista.appendChild(fragment);




/*-------Alternativa 2---------*/
// arrayPaises.forEach(pais => {
//     const li = document.createElement("li");
//     li.className = "list";

//     const b = document.createElement("b");
//     b.textContent = "Pais: ";

//     const span = document.createElement("span");
//     span.className = "text-primary";
//     span.textContent = pais;

//     li.appendChild(b);
//     li.appendChild(span);

//     fragment.appendChild(li);
// })
// lista.appendChild(fragment);

/*---------Alternativa 3---------------- */

// let template = "";
// arrayPaises.forEach(pais =>{
//     template += `
//     <li class="list">
//         <b>Pais:</b>
//         <span class="text-primary">${pais}</span>
//     </li>`
// });

// lista.innerHTML = template;






















// arrayPaises.forEach((pais) =>{
//     const newNode = document.createElement("li");
//     newNode.textContent = pais;

//     const reference = fragment.firstChild;

//     fragment.insertBefore(newNode, reference);
// });
// lista.appendChild(fragment); 