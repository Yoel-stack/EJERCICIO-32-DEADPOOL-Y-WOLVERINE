/*
 * EJERCICIO:
 * ¡Deadpool y Wolverine se enfrentan en una batalla épica!
 * Crea un programa que simule la pelea y determine un ganador.
 * El programa simula un combate por turnos, donde cada protagonista posee unos
 * puntos de vida iniciales, un daño de ataque variable y diferentes cualidades
 * de regeneración y evasión de ataques.
 * Requisitos:
 * 1. El usuario debe determinar la vida inicial de cada protagonista.
 * 2. Cada personaje puede impartir un daño aleatorio:
 *    - Deadpool: Entre 10 y 100.
 *    - Wolverine: Entre 10 y 120.
 * 3. Si el daño es el máximo, el personaje que lo recibe no ataca en el
 * siguiente turno, ya que tiene que regenerarse (pero no aumenta vida).
 * 4. Cada personaje puede evitar el ataque contrario:
 *    - Deadpool: 25% de posibilidades.
 *    - Wolverine: 20% de posibilidades.
 * 5. Un personaje pierde si sus puntos de vida llegan a cero o menos.
 * Acciones:
 * 1. Simula una batalla.
 * 2. Muestra el número del turno (pausa de 1 segundo entre turnos).
 * 3. Muestra qué pasa en cada turno.
 * 4. Muestra la vida en cada turno.
 * 5. Muestra el resultado final.
 */

let wolverine = {vida: 500, evasion: 5, regen: 30, max: 120};
let deadpool = {vida: 500, evasion: 4,regen: 30, max: 100};

function batalla (){
    let cantTurnos = 1;
    let ganador;
    let guascaso = 0;
    let vidaActual;
while(wolverine.vida > 0 && deadpool.vida > 0){
    //setTimeout(() => {
        console.log(`Vida Wolverine:${wolverine.vida} | Vida Deadpool:${deadpool.vida}`);
        console.log(`Round:  ${cantTurnos}`);
        if(guascaso == wolverine.max){
            console.log("Deadpool se esta regenerando se llevo un gran GOLPE!")
        } else if(Math.ceil(Math.random()*wolverine.evasion) == wolverine.evasion){
            console.log("Wolverine esquivo, que capoo!")
        } else {
            guascaso = (Math.ceil(Math.random()*90+10));
            console.log(`Deadpool golpea haciendo ${guascaso} de daño..`);
            vidaActual = wolverine.vida - guascaso;
            wolverine.vida = vidaActual;
        }
        if(guascaso == deadpool.max){
            console.log("Wolverine se esta REGENERANDO no puede pelear ahora!")
        }else if(Math.ceil(Math.random()*deadpool.evasion) == deadpool.evasion){
            console.log("Deadpool esquivo, que genio")  
        } else {
            guascaso = (Math.ceil(Math.random()*110+10));
            console.log(`Wolverine golpea haciendo ${guascaso} de daño..`);
            vidaActual = deadpool.vida - guascaso;
            deadpool.vida = vidaActual;
        }
            cantTurnos++;
    //}, 100);
    }
    if(wolverine.vida > deadpool.vida){
        ganador = "Wolverine";
    } else {
        ganador = "Deadpool"
    }

    console.log("Y el GANADOR de esta batalla ess!! " + ganador)
};

batalla();


