document.write('<script src="./calcular_propina.js" type="text/javascript"></script>');
//console.log("hola");
//este es un comentario, de una linea
/* 
este es un bloque de comentario, varias lineas
*/
//console.log es para imprimir en la consola
// let  = puede variar
// const = es fijo
// if = si
// else = sino

let plato = 6000

let bebida = 2000

let postre = 3000
console.log(plato, bebida, postre)
console.log(plato + bebida + postre)
console.log("el plato costo :", plato)
console.log("el plato costo :" + plato)

let result = plato + bebida + postre
//const propina15 = 0.15
//const propina10 = 0.1

// = es una asignación
let metodoDePago = "efectivo"
let propina = 0


propina = calcularPropina(metodoDePago , result);
let total = result + propina
console.log("propina", propina)
console.log("total", total)