const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Juan", edad: 30 },
  { nombre: "María", edad: 28 },
  { nombre: "Carlos", edad: 22 }
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

alert(`Bienvenido al filtro de personas, podrás crear una persona, filtrar por edad y buscar un nombre. Lista de personas:\n${listaPersonas}`);

const nuevoNombre = prompt("Ingresa el nombre de la nueva persona:");
let nuevaEdad = parseInt(prompt("Ingresa la edad de la nueva persona:"));

while (isNaN(nuevaEdad)) {
  nuevaEdad = parseInt(prompt("No ingresó un numero, ingresa la edad de la nueva persona:"));
}

personas.push({ nombre: nuevoNombre, edad: nuevaEdad });

let seguirFiltrando = true;

while (seguirFiltrando) {

  let personasMayoresDe = parseInt(prompt("Ingresa la edad minima que debe tener la gente para su filtro"));
  while (isNaN(personasMayoresDe)) {
    personasMayoresDe = parseInt(prompt("No ingresó un numero, ingresa la edad minima que debe tener la gente para su filtro"));
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
  if (!continuarFiltrando) {
    seguirFiltrando = false;
  }
}