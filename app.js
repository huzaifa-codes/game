let main = document.querySelector("#me")
let you = document.querySelector("#you")
let div = document.querySelector(".con")
let sum = ["rock" , "papper" , "Scissors"]

let com = 0
let me = 0
function gamer(han){
    let computer = sum[Math.floor(Math.random() * sum.length)]

    if(han === computer){
        div.innerHTML = ""
        console.log("ye drwo ho gaya hai");
        div.innerHTML = `<h1> It Was Dow</h1>`

        
    }
    else if( han === "rock" && computer === "Scissors" ||  han === "papper" && computer === "rock" || han === "Scissors" && computer === "papper"){
      main.innerHTML =  me++

        console.log("you win");
        console.log(me);
        div.innerHTML = `<h1>You Win</h1>`
        
        
    }
    else{
        console.log("you lose");
         div.innerHTML = `<h1>You Loss</h1>`
        
        you.innerHTML = com++
        console.log(com);
        
        
    }
    
    
}


