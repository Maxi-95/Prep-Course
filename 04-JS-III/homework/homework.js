// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return (array[array.length - 1]);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  
    return array.length;

  
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  
  
  var total = [];
  

  for (var i = 0; i < array.length; i++){
    total.push(array[i] + 1)
  }
    
    return total;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var caja1 = array;
  caja1.push(elemento);
  return caja1;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var caja2 = array;
  
  caja2.unshift(elemento);
  
  return caja2;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let oracion = palabras;
  let resultado = oracion.join(" ");
  return resultado;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  
  let resultado = array;
  return resultado.includes(elemento); 
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  var arreglo = numeros;
  var total = 0;

  for (var i = 0; i <arreglo.length; i++){
    total += arreglo[i];
  }
  
  return total;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  
  let array1 = resultadosTest;
    
  const initialValue = 0;
  const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
 
return (sumWithInitial / resultadosTest.length);
  
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var array1 = numeros;

  const initialValue = 0;

  const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => Math.max(previousValue, currentValue),
  initialValue
);

return sumWithInitial;

}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  
  if (arguments.length === 0){
    return 0;
  }
  else{
    var total = 1
    for (let i = 0; i < arguments.length; i++){
      arguments[i];
      total = total * arguments[i];

    }
    return total;
  }
    
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  var mayor = 0;

  for (let i = 0; i < arreglo.length; i++){
    
    if(arreglo[i] > 18){
      mayor++;
    }
  }
  return mayor;
  
}



function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
  
  
    if(numeroDeDia == 1 ){
      return "Es fin de semana";
    }
    if(numeroDeDia == 7 ){
      return "Es fin de semana";
    }
          
    else {
      return "Es dia Laboral";
    }
   
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
  let numeros = n + "";
  
  

  if (numeros[0] === "9"){
    return true;
  }
  else {
    return false;
  }
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  

  for (let i = 0; i < arreglo.length; i++){
    arreglo[i];
    
  for (let e = i + 1; e < arreglo.length; e++){
      arreglo[e];
    
    if (arreglo[i] === arreglo[e]){
      return true;
    }
    else {
      return false;
    }
  }
  
}
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  
   var meses = [];

  for (let i = 0; i < array.length; i++){
    
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      meses.push(array[i]);
    }
  }
    if(meses.length < 3)return "No se encontraron los meses pedidos";
    return meses;
      
  


}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  let array2 = [];

  for (let i = 0; i < array.length; i++){
    array[i];
    if (array[i] > 100){
      array2.push(array[i]);
    }
  }

  return array2;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  let array = [];
  let suma = numero;
  
  for (var i = 0; i < 10; i++){
    suma = suma + 2;
    if(suma === i){
      break;
    }
    else{
      array.push(suma);
    }
  }
  
  if(array.length < 10){ 
    return "Se interrumpió la ejecución";
  }else if (array.length === 10){
    return array;
  }
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  
  let array = [];
  let suma = numero;
  
  for (let i = 0; i < 10; i++){
    if(i === 5){
      continue;
    }
    suma += 2;
    array.push(suma);
    
  }
  return array;
  

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
