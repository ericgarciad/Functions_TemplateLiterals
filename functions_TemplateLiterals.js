//Nivel 1

/* Ejercicio1 - Crear una funció que imprimeixi en consola el nom d'usuari sent invocada externament i passant el nom 
com a paràmetre.
*/

/* Creamos la variable "argumentos" la que espera que le envies un argumento por linea de comandos 
de la siguiente manera:node app.js Eric
*/

let argumentos = process.argv

function nombreUsuario(argumentos) {

    //Devuelve en la variable argumentos el nombre que hayas introducido por linea de comandos.
    return "El nombre de usuario introducido en la consola es: " + argumentos;
}

console.log("Nivel 1 - Ejercicio 1")
console.log(nombreUsuario(argumentos))
console.log(" ")

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


let uno = function() {
    return 1;
}

let dos = function() {
    return uno() + 1;
}

let tres = function() {
    return dos() + 1;
}

let cuatro = function() {
    return tres() + 1;
}

let cinco = function() {
    return cuatro() + 1;
}

let seis = function() {
    return cinco() + 1;
}

let siete = function() {
    return seis() + 1;
}

let ocho = function() {
    return siete() +1;
}

let nueve = function() {
    return ocho() + 1;
}

let diez = function() {
    return nueve() + 1;
}

let matrizFunciones = [[uno() , dos(), tres(), cuatro(), cinco()] , 
                      [seis(), siete(), ocho(), nueve(), diez()]];

let i;

for (i = 0; i < matrizFunciones.length; i++) {
    console.log(matrizFunciones[i]);
}

//Nivel 3

/* Ejercicio 2 - Crear una funció anònima autoinvocable (igualada a una variable) que imprimeixi 
per pantalla el nom d'usuari rebut com a paràmetre
*/

// Creamos variable que recibira un nombre de usuari introducido por linea de comandos
let nombreUsuarioConsola = process.argv;

//Creamos función anónima autoinvocable e igualada a una variable que imprime el parámetro introducido
//por linea de comandos.
//Añadiendo (); al finalizar la función, se autoinvoca y muestra por consola lo que devuelve.
let funcionAutoinvocable = function () {
    console.log("El nombre de usuario recibido como parámetro es " + nombreUsuarioConsola);
}();

