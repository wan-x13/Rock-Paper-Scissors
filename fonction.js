
let playerScore = 0;
let computerScore = 0;
let response;


const computerPlay = function(){
    let randomNumber = Math.floor(Math.random() *3);
    randomNumber = randomNumber == 0 ? 'Rock': 
                   randomNumber == 1 ? 'Paper' : 'Scissor';
     return randomNumber;

}
const playRound  = function(playSelection , computerSelection){
    if(playSelection == computerSelection) return "Null";
    if(playSelection == 'Paper' && computerSelection == 'Rock'
    || playSelection == 'Rock' && computerSelection == 'Scissor'
    || playSelection == 'Scissor' && computerSelection == 'Paper'){
        return 'player';
    }
    else return  ' Computer';
}

const game = function (){


const player= 'Scissor';
const computerSelection = computerPlay();


  for(let i = 0; i<5 && response !== 'N'; i++){

  response = prompt('voulez vous jouer ? oui ou non (O/N') ;
  

    let result = playRound(player , computerSelection);
    console.log(result);
    if(result === 'player'){
  
      playerScore += 1;
    }
    else{
      computerScore +=1
    }
    let winner = getWinner();
    console.log(winner);

  }
}
const getWinner = function(){

  if(computerScore === 5 ){

    return " Computer win the Game"
  }
  else if(playerScore === 5){

    return "player win the Game"
  }
}


console.log(game());