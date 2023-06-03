// Declaración de variables
let num1 = 0;
let num2 = 0;
let operacion = "";

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: No se puede dividir entre cero";
  }
  return a / b;
}
// ciclo para pedir números y operación al usuario
while (true) {
  num1 = parseFloat(prompt("Ingresa el primer número:"));
  operacion = prompt("Ingresa la operación (+, -, *, /):");
  num2 = parseFloat(prompt("Ingresa el segundo número:"));

  // verificación de operación válida
  if (operacion === "+" || operacion === "-" || operacion === "*" || operacion === "/") {
    break;
  } else {
    alert("Operación inválida. Intenta de nuevo.");
  }
}  
// ejecución de operación
let resultado;
switch (operacion) {
  case "+":
    resultado = sumar(num1, num2);
    break;
  case "-":
    resultado = restar(num1, num2);
    break;
  case "*":
    resultado = multiplicar(num1, num2);
    break;
  case "/":
    resultado = dividir(num1, num2);
    break;
}

// Impresión del resultado
alert("El resultado es: " + resultado);

console.log(resultado)