// Definir constructor de Persona
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  modificarEdad(nuevaEdad) {
    this.edad = nuevaEdad;
  }
}

const personas = [
  new Persona("Ana", 25),
  new Persona("Juan", 30),
  new Persona("María", 28),
  new Persona("Carlos", 22)
];

const filtrarMayores = (edadMinima) => {
  return personas.filter(persona => persona.edad >= edadMinima);
};

function buscarPersonaPorNombre(nombre) {
  return personas.find(persona => persona.nombre === nombre);
}

let listaPersonas = "";

for (const persona of personas) {
  listaPersonas += `${persona.nombre} (Edad: ${persona.edad})\n`;
}

alert(`Bienvenido al filtro de personas, podrás crear una persona, filtrar por edad, buscar un nombre y modificar la edad de la persona que quieras. Lista de personas:\n${listaPersonas}`);

const nuevoNombre = prompt("Ingresa el nombre de la nueva persona:");
let nuevaEdad = parseInt(prompt("Ingresa la edad de la nueva persona:"));

while (isNaN(nuevaEdad)) {
  nuevaEdad = parseInt(prompt("No ingresó un número, ingresa la edad de la nueva persona:"));
}

personas.push(new Persona(nuevoNombre, nuevaEdad));

let seguirFiltrando = true;

while (seguirFiltrando) {

  let personasMayoresDe = parseInt(prompt("Ingresa la edad mínima que debe tener la gente para su filtro"));
  while (isNaN(personasMayoresDe)) {
    personasMayoresDe = parseInt(prompt("No ingresó un número, ingresa la edad mínima que debe tener la gente para su filtro"));
  }

  const filtroMayoresAplicado = filtrarMayores(personasMayoresDe);
  const filtroMayoresAplicadoString = filtroMayoresAplicado.map(persona => `${persona.nombre} (Edad: ${persona.edad})`).join('\n');

  alert("Personas mayores de " + personasMayoresDe + " años:\n" + filtroMayoresAplicadoString);

  const nombreBuscado = prompt("Ingresa el nombre de la persona que deseas buscar:");
  let personaBuscada = buscarPersonaPorNombre(nombreBuscado);

  if (personaBuscada) {
    personaBuscada = `${personaBuscada.nombre} (Edad: ${personaBuscada.edad})`;
  } else {
    personaBuscada = "No se encontró a la persona buscada";
  }

  alert("Persona buscada:\n" + personaBuscada);

  const continuarFiltrando = confirm("¿Quieres realizar otro filtro?");
  seguirFiltrando = continuarFiltrando;
}

let seguirModificando = true;
let listaPersonasVieja = "";

for (const persona of personas) {
  listaPersonasVieja += `${persona.nombre} (Edad: ${persona.edad})\n`;
}

console.log(`Lista de personas:\n${listaPersonasVieja}`);


while (seguirModificando) {
  const nombreModificado = prompt("Ingresa el nombre de la persona a modificar:");
  const personaAModificar = buscarPersonaPorNombre(nombreModificado);

  if (personaAModificar) {
    let nuevaEdad = parseInt(prompt(`Ingresa la nueva edad para ${personaAModificar.nombre}:`));

    while (isNaN(nuevaEdad)) {
      nuevaEdad = parseInt(prompt("No ingresó un número, ingresa la nueva edad:"));
    }

    personaAModificar.modificarEdad(nuevaEdad);
    alert(`Edad de ${personaAModificar.nombre} modificada a ${nuevaEdad} años.`);

  } else {
    alert("No se encontró a la persona a modificar.");
    seguirModificando = false;
  }

  const continuarModificando = confirm("¿Quieres seguir modificando?");
  seguirModificando = continuarModificando;
}

let listaPersonasNueva = "";

for (const persona of personas) {
  listaPersonasNueva += `${persona.nombre} (Edad: ${persona.edad})\n`;
}

console.log(`Lista de personas:\n${listaPersonasNueva}`);

const fechaActual = new Date();
console.log("Fecha actual:", fechaActual);

const anio = fechaActual.getFullYear();
console.log("Año actual:", anio);

const mes = fechaActual.getMonth() + 1;
console.log("Mes actual:", mes);

const dia = fechaActual.getDate();
console.log("Día actual:", dia);

alert("Fin");