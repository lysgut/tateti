const botones = [document.getElementById("t1"), document.getElementById("t2"),document.getElementById("t3"),document.getElementById("t4"),document.getElementById("t5"),document.getElementById("t6"),document.getElementById("t7"),document.getElementById("t8"),document.getElementById("t9")]


let player = 0

    for (let i = 0; i < 9; i++) {
        botones[i].addEventListener('click', function() {
            let i2 = i + 1

            botones[i].disabled = true
            if (player == 0) {
                botones[i].textContent = "X"
                console.log('Celda ' + i2 + " para X");
            } else {
                botones[i].textContent = "O"
                console.log('Celda ' + i2 + " para O");
            }
            player = 1-player
            checkWinner()
            }
        );;

    }

    function checkEmpate()
        {
            let countBlanks = 0
            for(e of botones){
                if(e.textContent=== "")
                {countBlanks++}
            }
            if(countBlanks === 0){
                console.log("Empate!! No hay ganadores")
                for(r of botones){
                    r.disabled = true
                }
            }
        }
    
    function checkWinner(){
        let winCode = [
            [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
        ]
        for(elem of winCode){
            if(botones[elem[0]].textContent === "X" || botones[elem[0]].textContent === "O"){
            if(botones[elem[0]].textContent === botones[elem[1]].textContent && botones[elem[0]].textContent === botones[elem[2]].textContent){
                console.log("Jugador " + botones[elem[0]].textContent + " Ha Ganado")
                for(elem of botones){
                    elem.disabled = true
                }}
                return true
            }
        }
    }


