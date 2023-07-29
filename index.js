function saludar(){
  let nombre = prompt("ingrese su nombre");
  console.log ("hola " + nombre);
  alert ("hola " + nombre);
}  
let edad = prompt ("Ingresa tu edad")
let peso = prompt("Ingresa tu peso en kilogramos:");
let altura = prompt("Ingresa tu altura en metros:");


// Convierte los valores a números
peso = parseFloat(peso);
altura = parseFloat(altura);


// Calcula el índice de masa corporal (IMC)
let imc = peso / (altura * altura);
alert ("Tu IMC ES: " + imc)

// imc normal menor o igual a 25 
if (imc <= 25) {
    alert("tu IMC es normal")   
}
//imc sobrepeso si el resultado obtenido es mayor a 25 
else if (imc > 25){
  alert("sobrepeso") 
}
//objeto

const persona = {
  nombre: '',  
  edad: 0,      
  peso: 0,      
  altura: 0     
};

// Asigna valores 
persona.nombre = 'nombre' + nombre;
persona.edad = edad + edad;
persona.peso = peso + peso;
persona.altura = altura + altura;

//  datos almacenados en  "persona"
console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Peso: ${persona.peso} kg`);
console.log(`Altura: ${persona.altura} m`);





