/* Ejercicio 5: Funciones
Escribe una función saludar que tome un nombre como parámetro e imprima "¡Hola, [nombre]!".
Escribe una función sumar que tome dos números como parámetros, los sume y devuelva el resultado.
Escribe una función factorial que tome un número como parámetro y devuelva su factorial (por ejemplo, factorial(5) debería devolver 120). */

let saludar = (nombre)=>{
    let texto = (`Hola ${nombre}`);
    return  texto;
}

const saludo = saludar("Guillermo");
console.log(saludo);

console.log("siguiente ejercicio");

let sumar = (a,b)=>{
    return a + b;
}
const resultado = sumar(2,8);
console.log(resultado);

console.log("siguiente ejercicio");

let factorial = (a)=>{
    let r = 1;
    for (i=1; i<=a; i++){
        r = r*i;
    }
    return r;
}
const res = factorial(6);
console.log(res);


