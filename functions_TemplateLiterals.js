//Nivel 1

/* Ejercicio1 - Crear una funció que imprimeixi en consola el nom d'usuari sent invocada externament i 
passant el nom com a paràmetre.
*/

/* Creamos la variable "argumentos" la que espera que le envies un argumento por linea de comandos 
de la siguiente manera:node app.js Eric
*/


function nombreUsuario(argumentos) {

    //Devuelve en la variable argumentos el nombre que hayas introducido por linea de comandos.
    return "El nombre de usuario introducido es " + argumentos;
}

let nomUsuario = "Eric García";

console.log("Nivel 1 - Ejercicio 1");
console.log(nombreUsuario(nomUsuario));
console.log(" ");

//Nivel 2 

/* Ejercicio 1 - Imprimir el nom i cognoms de l'usuari en variables mitjançant template literals, 
creant les variables i referenciant en la impressió de l'missatge
*/

let nombre = 'Eric';
let apellido = 'Garcia';

function nombreApellido() {

    return `El nombre es ${nombre} 
y el apellido es ${apellido}.`
}

console.log("Nivel 2 - Ejercicio 1");
console.log(nombreApellido());
console.log(" ");


/* Ejercicio 2 - Invocar la funció mitjançant template literals
*/
console.log("Nivel 2 - Ejercicio 2");
console.log(`${nombreApellido()}`)
console.log(" ");

//Nivel 3

/* Ejercicio 1 - Crear una matriu de funcions i invocar cada funció de l'array recursivament perquè
imprimeixi per pantalla els números de l'1 a el 10
*/

console.log("Nivel 3 - Ejercicio 1");

//Creamos función que cuenta e imprimer por pantalla del 0 al 10
function contarNum() {
    let i;
    console.log("Función iterativa");

    for(i = 0; i <= 10; i++) {
        console.log(i);
    }
}

// Creamos array vacío

let matrizFunciones = [];

// Llenamos el array iterando 10 veces por la misma función
let i = 0;

while (i < 10) {
    matrizFunciones.push(function() {contarNum(); });
    i++;
}

// Llamamos a todas las posiciones del Array
function llamadaArray() {
    while (matrizFunciones.length){
        let fnc = matrizFunciones.splice(0,1)[0]
        fnc();
    }
}

llamadaArray();

//Nivel 3

/* Ejercicio 2 - Crear una funció anònima autoinvocable (igualada a una variable) que imprimeixi 
per pantalla el nom d'usuari rebut com a paràmetre
*/

// Creamos variable con el nombre de usuario
let nombreUsuarioNivel3 = "Eric García Domingo";

console.log("Nivel 3 - Ejercicio 2");
//Creamos función anónima autoinvocable e igualada a una variable que imprime el parámetro introducido
//Añadiendo (); al finalizar la función, se autoinvoca y muestra por consola lo que devuelve.
let funcionAutoinvocable = function (param) {
    param = nombreUsuarioNivel3;
    console.log("El nombre de usuario recibido como parámetro es " + param);
}();

