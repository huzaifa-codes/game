let main = document.querySelector("#me")
let you = document.querySelector("#you")
let sum = ["rock" , "papper" , "Scissors"]

let com = 0
let me = 0
function gamer(han){
    let computer = sum[Math.floor(Math.random() * sum.length)]

    if(han === computer){
        console.log("ye drwo ho gaya hai");
        
    }
    else if( han === "rock" && computer === "Scissors" ||  han === "papper" && computer === "rock" || han === "Scissors" && computer === "papper"){
      main.innerHTML =  me++

        console.log("you win");
        console.log(me);
        
        
    }
    else{
        console.log("you lose");
        
        you.innerHTML = com++
        console.log(com);
        
        
    }
    
    
}


