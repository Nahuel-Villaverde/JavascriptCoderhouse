//le pido el nombre al usuario
function solicitarNombre() {
    let nombreJugador = prompt("Cual es tu nombre?").toLowerCase();
    alert(`Bienvenido  ${nombreJugador}`);
    return nombreJugador;
  }
  
//pido la primera decision y la valido  
  function pedirDecision(mensaje) {
    let decision = prompt(mensaje).toLowerCase();
    while (decision !== "derecha" && decision !== "izquierda") {
      decision = prompt("Tu eleccion no es valida, ingrese derecha o izquierda").toLowerCase();
    }
    return decision;
  }

  function pedirDecision2(mensaje) {
    let decision2 = prompt(mensaje).toLowerCase();
    while (decision2 !== "si" && decision2 !== "no") {
      decision2 = prompt("Tu eleccion no es valida, ingrese si o no").toLowerCase();
    }
    return decision2;
  }
  
//el primer posible resultado de la eleccion 
  function explorarCueva() {
    let decision2 = pedirDecision2("Te encuentras con una cueva, quieres entrar? si/no");
    if (decision2 === "si") {
      alert("Entraste a la cueva y encontraste un cofre lleno de oro!!!");
    } else if (decision2 === "no") {
      alert("No entraste a la cueva, sigues buscando una aventura");
    }
  }
  
  ///el segundo posible resultado de la eleccion 
  function explorarBosque() {
    let decision2 = pedirDecision2("Te encuentras con un bosque, quieres entrar? si/no");
    if (decision2 === "si") {
      alert("Entraste al bosque y te mató una serpiente gigante");
    } else if (decision2 === "no") {
      alert("No entraste al bosque");
    }
  }
  
  //la funcion que abarca a las demas funciones
  function jugarJuego() {
    let nombreJugador = solicitarNombre();
    let decision = pedirDecision("Comenzaste tu camino, quieres ir a la derecha o a la izquierda?");
    
    if (decision === "izquierda") {
      explorarCueva();
    } else if (decision === "derecha") {
      explorarBosque();
    }
  }
  
  // Llamo a la función para iniciar el juego
  jugarJuego();