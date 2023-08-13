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
