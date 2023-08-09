let materia;
let nombre;
let respuesta = "si";
let nota = 0;
let legajo;

let contadorMatematica = 0;
let contadorLiteratura = 0;
let contadorBiologia = 0;
let materiaMasElegida;
let vecesMateriaMasElegida;

let banderaNotaMenor = 0;
let menorNota;
let nombreMenorNota;


function validarMateria(inputMateria) {
    return inputMateria === "matematica" || inputMateria === "literatura" || inputMateria === "biologia";
}

function ingresarNota() {
    let notaIngresada = parseInt(prompt("Ingrese la nota del alumno (1 - 10)"));
    while (!(notaIngresada >= 1 && notaIngresada <= 10)) {
        notaIngresada = parseInt(prompt("Reingrese la nota del alumno (1 - 10)"));
    }
    return notaIngresada;
}

function registrarAlumno(){
    nombre = prompt("Ingrese el nombre del alumno");

    materia = prompt("Ingrese la materia del alumno (matematica, literatura o biologia)").toLowerCase();
    while (!validarMateria(materia)) {
        materia = prompt("Reingrese el nombre de la materia (matematica, literatura o biologia)").toLowerCase();
    }

    console.log(materia)
    nota = ingresarNota();
    console.log(nota)

    legajo = prompt("Ingrese el legajo del alumno");

    switch (materia) {
        case "matematica":
            contadorMatematica++;
            break;

        case "literatura":
            contadorLiteratura++;
            break;

        case "biologia":
            contadorBiologia++;
            break;
    }

    if (banderaNotaMenor === 0 || nota < menorNota) {
        menorNota = nota;
        nombreMenorNota = nombre;
        banderaNotaMenor = 1;
    }

    console.log("El alumno con la menor nota fue " + nombreMenorNota + " con un " + menorNota);
}

function contadores(){
    if (contadorMatematica > contadorLiteratura && contadorMatematica > contadorBiologia) {
        materiaMasElegida = "matematica";
        vecesMateriaMasElegida = contadorMatematica;
    
    } else if (contadorLiteratura > contadorBiologia) {
        materiaMasElegida = "literatura";
        vecesMateriaMasElegida = contadorLiteratura;
    
    } else {
        materiaMasElegida = "biologia";
        vecesMateriaMasElegida = contadorBiologia;
    }

    console.log("La materia mas elegida fue " + materiaMasElegida + " con un total de " + vecesMateriaMasElegida);
}



const nombreUsuario = prompt("Cual es tu nombre?").toLowerCase();
alert(`Bienvenido al registro de notas de los alumnos, ${nombreUsuario}`);

while (respuesta === "si") {
    registrarAlumno();
    respuesta = prompt("Desea continuar agregando alumnos?");
}

contadores();

alert("La materia mas elegida fue " + materiaMasElegida + " con un total de " + vecesMateriaMasElegida);
alert("El alumno con la menor nota fue " + nombreMenorNota + " con un " + menorNota);