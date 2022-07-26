/*-------------------map--------------------------*/

// const frutas = ["🍌","🍎","🍓"];

// const nuevoArray = frutas.map((fruta) => fruta )

//----Aclaracion:  Map noi muta el array original, sino que devuelve un array nuevo


const users = [
    {name: "juan", age: 33},
    {name: "pedro", age: 24},
    {name: "jose", age: 45},
];

const names= users.map((user) => user.name)

console.log(names)



const numeros = [1,2,3,4,5,6,7,8,9,10];
const numerosPorDos = numeros.map((item) => item*2)

console.log(numerosPorDos);

/*-------------------filter--------------------------*/
const usuarios = [
    {uid:1, name: "juan", age: 35},
    {uid:2, name: "pepe", age: 45},
    {uid:3, name: "roberto", age: 12},
];

// const masTreinta = usuarios.filter((user)=> user.age > 30);
// console.log(masTreinta);

const userFiltrado = usuarios.filter((user)=> user.uid !== 3);
console.log(userFiltrado);


/*-------------------find--------------------------*/
//devuelve el primer elemento que coincida en el array

const personas = [
    {uid:1, name: "juan", age: 35},
    {uid:2, name: "pepe", age: 45},
    {uid:3, name: "roberto", age: 12},
];

const {name} = personas.find((user)=> user.name === "pepe");
console.log(name);

/*-------------------some--------------------------*/
//devuelve true o false
const clientes = [
    {uid:1, name: "juan", age: 35},
    {uid:2, name: "pepe", age: 45},
    {uid:3, name: "roberto", age: 12},
];

const existe = clientes.some((cliente)=> cliente.uid ===2);
console.log(existe);

const noExiste = clientes.some((cliente)=> cliente.uid ===4);
console.log(noExiste);

/*-------------------findIndex--------------------------*/
const sujetos = [
    {uid:1, name: "juan", age: 35},
    {uid:2, name: "pepe", age: 45},
    {uid:3, name: "roberto", age: 12},
];

const indice = sujetos.findIndex((sujeto) => sujeto.uid ===3);
console.log(sujetos[indice]);

const indiceInexistente = sujetos.findIndex((sujeto) => sujeto.uid ===4);
console.log(indiceInexistente);


/*-------------------slice--------------------------*/
//Devuelve una copia de una parte del array

const arr = ["Cat","Dog","Tiger","Lion"];

arrNuevo = arr.slice(1,3);
console.log(arrNuevo);

/*-------------------concat--------------------------*/
//Devuelve un NUEVO array resultante de la union de otros dos o mas

const arr1 = ["a","b","c"];
const arr2 = ["d","e","f"];

const arr3 = arr1.concat(arr2);
console.log(arr3);

//Otra manera d ehacerlo mas facil a continuacion
/*-------------------spread sintaxis --------------------------*/
const array1 = ["a","b","c"];
const array2 = ["d","e","f"];

const array3 = [...array1, ...arr2];
console.log(array3);

/*-------------------reduce --------------------------*/
const digitos = [1,2,3,4,5];
const sumarTodos = digitos.reduce((acc, valorActual)=> acc + valorActual);
console.log(sumarTodos);




//Ejemplo canal HolaMundo
const mascotas = [
    {nombre: "toro", edad:12,tipo: "perro"},
    {nombre: "simon", edad:12,tipo: "perro"},
    {nombre: "pocho", edad:12,tipo: "gato"},
    {nombre: "michi", edad:12,tipo: "gato"},
];

const indexed = mascotas.reduce((acc,elem)=>({
    ...acc,
    [elem.nombre] : elem
}), {});

console.log(indexed);

//Ejemplos para desanidar arreglos
const arregloAnidado = [
    [0,1],
    [2,3],
    [4,5],
    6,7,
];

const arregloDesanidado = arregloAnidado.reduce((acc, elem) => acc.concat(elem));
console.log(arregloDesanidado);

//otra manera ->
const arregloDesanidado2 = [].concat(...arregloDesanidado);
console.log(arregloDesanidado2);

//otra mas ->
const arregloDesanidado3 = arregloAnidado.flat();
console.log(arregloDesanidado3);

//un ejemplo con flat con otro nivel de anidado
const arregloAnidado2 = [1,2,[3,4, [5,6]]];
const arregloDesanidado4 = arregloAnidado2.flat(2);
console.log(arregloDesanidado4);


/*-------------------split--------------------------*/

const cadenaMeses = "Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre";

const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);

const nuevoTexto = arrayMeses.join("-");
console.log(nuevoTexto); 


