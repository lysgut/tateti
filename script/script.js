const xo = ["X", "O"]
let xo1;
let xo2;
let jugador1;
let jugador2;

function continuarJugador1() {
    popupJugador1.style.display = "none";
    popupJugador2.style.display = "block";
    xo1 = xo[document.getElementById("simboloJugador1").value]
    xo2 = xo[1 - document.getElementById("simboloJugador1").value]
}



function continuarJugador2() {
    xo1 = xo[document.getElementById("simboloJugador1").value]
    xo2 = xo[1 - document.getElementById("simboloJugador1").value]
    jugador1 = document.getElementById("nombreJugador1").value;
    jugador2 = document.getElementById("nombreJugador2").value;
    console.log(jugador1 + " = " + xo1)
    console.log(jugador2 + " = " + xo2)
    popupJugador2.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    const popupJugador1 = document.getElementById("popupJugador1");
    const popupJugador2 = document.getElementById("popupJugador2");

    popupJugador1.style.display = "block";
});

const botones = [document.getElementById("t1"), document.getElementById("t2"),document.getElementById("t3"),document.getElementById("t4"),document.getElementById("t5"),document.getElementById("t6"),document.getElementById("t7"),document.getElementById("t8"),document.getElementById("t9")]
const msg = document.getElementById("msg")

let player = 0

    for (let i = 0; i < 9; i++) {
        botones[i].addEventListener('click', function() {
            let i2 = i + 1

            botones[i].disabled = true
            if (player == 0) {
                botones[i].textContent = xo1
                console.log('Celda ' + i2 + " para " + xo1);
                msg.textContent = "Jugando " + jugador2 + "( " +xo2+ " )"

            } else {
                botones[i].textContent = xo2
                console.log('Celda ' + i2 + " para " + xo2);
                msg.textContent = "Jugando " + jugador1 + "( " +xo1+ " )"
            }
            player = 1-player
            if(checkWinner()){
                for(e of botones){
                    e.disabled=true
                }
            } else if(checkEmpate()) {
                for(e1 of botones){
                    e1.disabled=true
                }
            }
            }
        );;

    }

    function checkEmpate()
        {
            let countXO = 0
            for(j of botones)
            if(j.textContent == xo1 || j.textContent == xo2){
                countXO++
            }
            if(countXO == 9){
                msg.textContent = "Empate !! No hay ganadores."
                return true
            }
            return false
        }
    
    function checkWinner(){
        let winCode = [
            [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
        ]
        for(elem of winCode){
            let a = botones[elem[0]].textContent
            let b = botones[elem[1]].textContent
            let c = botones[elem[2]].textContent
            let xos = [xo1, xo2]
            for(k of xos){
                if(a==k && b==k && c==k){
                    if(k == xo1){
                    msg.textContent = jugador1 + " ha ganado ( "+ k +" )"
                }
                else{
                    msg.textContent = jugador2 + " ha ganado ( " + k + " )"
                }
                    return true
                }
            }   
        }
    }


