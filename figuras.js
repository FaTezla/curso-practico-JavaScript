// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo (lado1,lado2,base){
  const sP = (lado1 + lado2 + base) / 2; 
  return Math.sqrt(sP * (sP - lado1) * (sP - lado2) * (sP - base));
} 
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
// Aquí interactuamos con el HTML triangulo
function calcularPerimetroTriangulo(){
  const input1 = document.getElementById("InputLado1");
  const value1 = Number(input1.value);
  const input2 = document.getElementById("InputLado2");
  const value2 = Number(input2.value);
  const base = document.getElementById("InputBase");
  const value3 = Number(base.value);
  const perimetro = perimetroTriangulo(value1,value2,value3);
  alert("El perimetro del triangulo es: " + perimetro);
}
function calcularAreaTriangulo(){
  const input1 = document.getElementById("InputLado1");
  const value1 = Number(input1.value);
  const input2 = document.getElementById("InputLado2");
  const value2 = Number(input2.value);
  const base = document.getElementById("InputBase");
  const value3 = Number(base.value);
  const area = areaTriangulo(value1,value2,value3);
  alert("El area del triangulo es: " + area);
}
// Aquí interactuamos con el HTML circulo
function calcularPerimetroCirculo() {
  const rad = document.getElementById("InputCirculo");
  const value4 = rad.value;

  const perimetro = perimetroCirculo(value4);
  alert(perimetro);
}
function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}
