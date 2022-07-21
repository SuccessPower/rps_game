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

}

btnEl.addEventListener("click", playBtn)



// console.log(player1ImageEl)