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


