let imageArrayNum1 = ["./images/rock1.png","./images/paper1.png","./images/scissors1.png"]
let imageArrayNum2 = ["./images/rock2.png","./images/paper2.png","./images/scissors2.png"]


let player1ImageEl = document.getElementById("player1Image")
let btnEl = document.getElementById("play-btn")

let player2ImageEl = document.getElementById("player2Image")


function randomNumIndex() {
    randomNumber = Math.floor (Math.random() * 3 )
    return randomNumber
}

function playBtn() {
    
    player1ImageEl.src = imageArrayNum1[randomNumIndex()]
    player2ImageEl.src = imageArrayNum2[randomNumIndex()]
    // player1ImageEl.src = imageArrayNum1[1]
    // player2ImageEl.src = imageArrayNum2[1]

    let resultEl = document.getElementById("result")
    resultEl.textContent = "result"

    for (let i = 0; i < imageArrayNum1.length; i += 1) {
        if (player1ImageEl.src == imageArrayNum1[i].indexOf() && player2ImageEl.src == imageArrayNum2[i].indexOf()) {
            resultEl.textContent = "Draw! Play again"
        } else if (player1ImageEl.src == imageArrayNum1[0] && player2ImageEl.src == imageArrayNum2[1] )  {
            resultEl.textContent = "Player 2 Wins";
        } else if (player1ImageEl.src == imageArrayNum1[1] && player2ImageEl.src == imageArrayNum2[0]) {
            resultEl.textContent = "Player 1 Wins"
        } else if (player1ImageEl.src == imageArrayNum1[0] && player2ImageEl.src == imageArrayNum2[2]) {
            resultEl.textContent = "Player 1 Wins"
        } else if (player1ImageEl.src == imageArrayNum1[2] && player2ImageEl.src == imageArrayNum2[0]) {
            resultEl.textContent = "Player 2 Wins"
        } else {
            resultEl.textContent = imageArrayNum2[i].indexOf()
        }
    }
    return resultEl.textContent
}

btnEl.addEventListener("click", playBtn)



// console.log(player1ImageEl)