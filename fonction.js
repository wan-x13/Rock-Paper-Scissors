

const form = document.querySelector('form');
const input = document.querySelector('input');
const userPlayer = document.querySelector(".userPlayer");
const currentLogoPlayer = document.querySelector('.currentLogoPlayer');
const scorePlayer = document.querySelector('.scorePlayer');
const scoreComputer = document.querySelector(".scoreComputer");
const currentLogoComputer = document.querySelector(".currentLogoComputer");
const card = document.querySelector('.card');
const homePage = document.querySelector(".homePage");
const gamePage = document.querySelector(".game");
const image = document.querySelectorAll("img");
const titleScore = document.querySelector(".titleScore > h2")
const imageWinner = document.querySelector('.imageWinner')
const resultName = document.querySelector(".resultName")
const resultPage = document.querySelector(".resultPage");


let playerScore = 0;
let computerScore = 0;
let response;
let userName ;

form.addEventListener("submit", function(e){

  e.preventDefault();
  if(input.value.trim() === ""){

    input.classList.add("invalid");
    input.nextElementSibling.innerText = "cannot be blank";
  }
  else if(input.value.length <3){
    input.classList.add("invalid");
    input.nextElementSibling.innerText = "no less than 3 characters";

  }
  else {
    input.classList.add("valid")
    input.nextElementSibling.innerText = "";
    userName = input.value;

    homePage.style.display = "none";
    gamePage.style.display = "block";

  }
})



const computerPlay = function(){
  let randomNumber = Math.floor(Math.random() *3);
  randomNumber = randomNumber == 0 ? 'Rock': 
                 randomNumber == 1 ? 'Paper' : 'Scissor';
   return randomNumber;

}


let imageAttr;


const updateChoice = (imageAttr,computerSelection)=>{

  switch(imageAttr){
    case 'Rock':
      currentLogoPlayer.innerText = "✊🏻"
      break;
    case 'Paper':
      currentLogoPlayer.innerText = "✋🏻"
      break;
    case 'Scissor':
      currentLogoPlayer.innerText = "✌🏻"
      break;
  }


  switch(computerSelection){
    case 'Rock':
      currentLogoComputer.innerText = "✊🏻"
      break;
    case 'Paper':
      currentLogoComputer.innerText = "✋🏻"
      break;
    case 'Scissor':
      currentLogoComputer.innerText = "✌🏻"
      break;
  }

}

const playRound  = function(e){

  imageAttr = e.target.getAttribute('id')

  const computerSelection = computerPlay();

  if(imageAttr == computerSelection) return "It's a Tie";
  if(imageAttr == 'Paper' && computerSelection == 'Rock'
  || imageAttr == 'Rock' && computerSelection == 'Scissor'
  || imageAttr == 'Scissor' && computerSelection == 'Paper'){

     updateChoice(imageAttr, computerSelection);



      return 'player';
      
  }
  else {

    updateChoice(imageAttr, computerSelection);
    return  'computer';
  }

}


const getWinner = (a,b)=>{
 
  let result
  if(a==5){
   

    gamePage.style.display = "none"
    resultPage.style.display = "flex"
  
     result = `${userName} win`
     resultName.innerText = result;


  }
  if(b==5){
    gamePage.style.display = "none"
    resultPage.style.display = "flex"

    result = `computer win`
    resultName.innerText = result;
  }

  

}

const game = function (e){
  let response = playRound(e);
  if(response === "player"){
    playerScore += 1;
    titleScore.innerText = "Score";
    scorePlayer.innerText = playerScore
  }
  if(response === "computer"){
    computerScore += 1;
    titleScore.innerText = "Score";
    scoreComputer.innerText= computerScore
  }
  if(response === "It's a Tie"){
    titleScore.innerText = response;
    titleScore.style.color = "red";
    titleScore.style.fontSize = "35px"

  }
 getWinner(playerScore, computerScore);
  

}



image.forEach(img => img.addEventListener('click' , game))
