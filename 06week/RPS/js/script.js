var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}
//console.log("Computer chooses: " + computerChoice);

var play = function(userChoice, computerChoice) {

  if (userChoice === computerChoice) {
    return "Tie"
  }
  else if (userChoice === "rock" && computerChoice === "scissors"){
    return "Win"
  }
  else if (userChoice === "rock" && computerChoice === "paper"){
    return "Lose"
  }
  else if (userChoice === "paper" && computerChoice === "rock"){
    return "Win"
  }
  else if (userChoice === "paper" && computerChoice === "scissors"){
    return "Lose"
  }
   else if (userChoice === "scissors" && computerChoice === "paper"){
    return "Win"
  }
  else if (userChoice === "scissors" && computerChoice === "rock"){
    return "Lose"
  }
}

document.write("Computer chose: " + computerChoice + "<br>");
document.write(play(userChoice, computerChoice));
