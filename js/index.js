let nombreJugador 
let decision
let decision1

nombreJugador= prompt("Cual es tu nombre?") .toLowerCase()
alert("Bienvenido " + nombreJugador)

decision = prompt("Comenzaste tu camino, quieres ir a la derecha o a la izquierda?") .toLowerCase()

while(decision != "derecha" && decision != "izquierda"){
    decision = prompt("Tu eleccion no es valida, ingrese derecha o izquierda") .toLowerCase()
}

if(decision == "izquierda"){

    decision1 = prompt("Te encuentras con una cueva, quieres entrar? si/no") .toLowerCase()

    while(decision1 != "si" && decision1 != "no"){
        decision1 = prompt("Tu eleccion no es valida, Te encuentras con una cueva, quieres entrar? si/no") .toLowerCase()
    }

    if(decision1 == "si"){
        alert("Entraste a la cueva y encontraste un cofre lleno de oro!!!")
    }
    else if(decision1 == "no"){
        alert("No entraste a la cueva, sigues buscando una aventura")
    }
}

else if(decision == "derecha"){

    decision1 = prompt("Te encuentras con un bosque, quieres entrar? si/no") .toLowerCase()


    while(decision1 != "si" && decision1 != "no"){
        decision1 = prompt("Tu eleccion no es valida, Te encuentras con un bosque, quieres entrar? si/no") .toLowerCase()
    }

    if(decision1 == "si"){
        alert("Entraste al bosque y te mató una serpiente gigante")
    }
    else if(decision1 == "no"){
        alert("No entraste al bosque")
    }
}
