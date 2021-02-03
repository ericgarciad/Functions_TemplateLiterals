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


let uno = function () {
    let i = 0;
    console.log("Función 1");
    while (i < 10) {
        console.log(i);
        i++;
    }
}

let dos = function () {
    let i = 0;
    console.log("Función 2");
    while (i < 10) {
        console.log(i);
        i++;
    }
}

let tres = function () {
    let i = 0;
    console.log("Función 3");
    while (i < 10) {
        console.log(i);
        i++;
    }
}

let cuatro = function () {
    let i = 0;
    console.log("Función 4");
    while (i < 10) {
        console.log(i);
        i++;
    }
}

let cinco = function () {
    let i = 0;
    console.log("Función 5");
    while (i < 10) {
        console.log(i);
        i++;
    }
}

let seis = function () {
    let i = 0;
    console.log("Función 6");
    while (i < 10) {
        console.log(i);
        i++;
    }
}

let siete = function () {
    let i = 0;
    console.log("Función 7");
    while (i < 10) {
        console.log(i);
        i++;
    }
}

let ocho = function () {
    let i = 0;
    console.log("Función 8");
    while (i < 10) {
        console.log(i);
        i++;
    }
}

let nueve = function () {
    let i = 0;
    console.log("Función 9");
    while (i < 10) {
        console.log(i);
        i++;
    }
}

let diez = function () {
    let i = 0;
    console.log("Función 10");
    while (i < 10) {
        console.log(i);
        i++;
    }
}

console.log("Nivel 3 - Ejercicio 1");

let matrizFunciones = [[uno(), dos(), tres(), cuatro(), cinco()],
                       [seis(), siete(), ocho(), nueve(), diez()]];

let i;

for (i = 0; i < matrizFunciones.length; i++) {
    matrizFunciones[i];
}


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

