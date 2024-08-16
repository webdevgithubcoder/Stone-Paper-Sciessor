let userscore = 0;  // initially score will 0
let compscore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice"); //  used to select and retrieve  
const msg = document.querySelector("#msg");
const genComputerChoice = () =>{
    const options = ["rock","paper","Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw.Play again.";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
       
    }else{
            compscore++;
            compScorePara.innerText = compscore;
        msg.innerText = `you lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
// selecting for computer choice 
const playGame = (userChoice) =>{
    console.log("user choice =",userChoice);
    const compChoice = genComputerChoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice){
        // draw Game 
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors" ? false :true;
        }
        else{
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice,compChoice);
    }
};

// selecting for user choice 
choices.forEach((choice) => { // it iterate over each element  
    choice.addEventListener("click",() =>{ // event listener is being attached to each element in the choices NodeList using the forEach method 
        const userChoice = choice.getAttribute("Id"); // it logs the id of that choice when console is clicked
        playGame(userChoice); // call function playgame
    });
});





