alert("Hola desde JS")

var saludo = "como estas?"
alert(saludo);

document.write(saludo)
document.write("<p>Saludo desde parrafo </p>") 

function saludo() {
 console.log("saludo desde consola");
 alert('apretaste en log') 
}


function cambiarcolor(){
 const color = prompt("Ingrese color");
 document.body.style.backgroundColor = color;
}

function cambiartitulo(){
const titulo=document.querySelector('h1')
console.log(titulo);
titulo.style.backgroundColor ='yellow'
}

function cambiarH3(){
const tituloH3 = document.querySelector('#miH3')
const size = prompt('Ingrese el tamaño del titulo')
tituloH3.style.fontSize = size;
console.log(tituloH3);
}