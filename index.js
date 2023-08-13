function solicitarNombre(){
    let nombre = prompt("ingrese su nombre");
    console.log("hola " + nombre);
    alert("hola " + nombre);
  } 
/*!!!! solicitar edad para saber si es usuario habilitado*/
let edad = prompt("ingrese su edad");
// edad normal menor o igual a 18
if (edad <= 18){
  alert("PROHIBIDA LA VENTA A MENORES DE 18 AÑOS");   
}
//edad  mayor o igual a 18 
else if (edad >= 18){
alert("BIENVENIDO A LA TIENDA VIRTUAL"); 
}
solicitarNombre();
const productos = [
  { nombre: "Producto1", precio: 15000 },
  { nombre: "Producto2", precio: 5000 },
];

function sumar (Producto1, Producto2){
  let resultado= Producto1 + Producto2
  return resultado

}
document.getElementById("cabo").innerHTML = "codigo mentor";
document.getElementById("cabo").style.color = "blue";
document.getElementById("cabo").style.fontSize = 25 px;