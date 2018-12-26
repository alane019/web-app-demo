//alert("You are about to experience something incredible.");

var userScore = 0; 
var computerScore = 0; 
var lastWinner = "na"; 

var loseGame = new Audio("a/loseGame.wav" );
var selectSound = new Audio("a/click.wav");
var clangSound = new Audio("a/clang.wav");
var tieSound = new Audio("a/pongNoise.wav");
var winSound = new Audio("a/ringGet.wav");
var champSound = new Audio("a/FinalCountdown.wav");
var loseSound = new Audio("a/loseRound.wav");
var loseGame2 = new Audio("a/loseSound2.wav");
		
function displayResult() {

	var tempTestForce = new Array('Rock','Paper','Scissors');

    var user_throw = document.getElementById("dd").value;
    console.log(user_throw); 
	/*  var user_repeat_throw = user_throw  */ 
    var game_ref = new Array('Rock','Paper','Scissors');
    var game_throw = game_ref[Math.floor(Math.random() * 3)];

 	/* declare choice text setter functions. */ 
    var setUserChoiceDisplayBox = function(text) {
     	document.getElementById("user-choice-container-body").innerHTML = text; 
    }
 	var setComputerChoiceDisplayBox = function(textt) {
    	document.getElementById("computer-choice-container-body").innerHTML = textt; 
    }

    var computer_choice = game_throw; 
    var user_choice = user_throw;

    setUserChoiceDisplayBox(user_choice);
    setComputerChoiceDisplayBox(computer_choice)
 	

	var resultText = " result text to be displayed"; 
	var resultDescription = "discription of game outcome scenario (e.g. user-is-paper, pc-is-rock)"; 
	//var tempTestResult = "TEST"; 
	
	var gameResult = function() {
		// Paper > Rock;   Rock > Scissors; Scisscors > Paper;
			if(user_choice == computer_choice) {
				return  "scenario--tie"; 
			} //End TIE Scenario ------ Takes care of one of 1/3 of all cases. (3 of 9 possible outcomes)

			//PC is rock 
			else if(user_choice === "Paper" && computer_choice === "Rock" ) {
				return "PR-win";  
			}
			else if(user_choice === "Scissors" && computer_choice === "Rock" ) {
				return "SR-lose";
			}
			//PC is paper 
			else if(user_choice === "Rock" && computer_choice === "Paper" ) {
				return "RP-lose";
			}
			else if(user_choice === "Scissors" && computer_choice === "Paper" ) {
				return "SP-win";
			}
			//PC is scissors
			else if(user_choice === "Rock" && computer_choice === "Scissors" ) {
				return "RS-win";
			}
			else if(user_choice === "Paper" && computer_choice === "Scissors" ) {
				return "PS-lose";
			}

		} // end of gameResult (conditional logic) function. 
	
		console.log(resultDescription); 

		resultDescription = gameResult(); 

		console.log(resultDescription); 
		
		//text for each scenario can be updated here. 
		//result description and text are separated to avoid logic errors when updating display text. Game scenarios will not change. 
		//
		 if(resultDescription == "scenario--tie") { 
		 	resultText = "Tie.";
		 	lastWinner = "tie";
		 	tieSound.volume = .2; 
		 	tieSound.play(); 
		 	 }

		 	//------ Paper win scenarios.
		 	 else if(resultDescription == "RP-lose") { 
			  	resultText = "Paper beats rock. You lose this round!"; 
			  	computerScore++; 
			  	lastWinner = "computer"; 
			  	loseSound.volume = 0.2;
			  	loseSound.play();
			  }
			 else if(resultDescription == "PR-win") { 
			 	resultText = "Paper beats rock. You win this round!"; 
			 	userScore++; 
			 	lastWinner = "user"; 
			 	winSound.volume = 0.1;
			  	winSound.play();
			 }
			
			  //------- Scissors wins scenarios. 
			  else if (resultDescription == "PS-lose" ) {
			  	resultText = "Scissors beats paper. You lose this round!";
			  	computerScore++; 
			  	lastWinner = "computer"; 
			  	loseSound.volume = 0.2;
			  	loseSound.play();
			  }
			  else if (resultDescription == "SP-win" ) {
			  		resultText = "Scissors beats paper. You win this round!";
			  		userScore++; 
			  		lastWinner = "user"; 
			  		winSound.volume = 0.1;
			  	winSound.play();
			  	}
			  	// ----- Rock wins scenarios. 
			   else if (resultDescription == "SR-lose" ) {
			   		resultText = "Rock beats scissors. You lose this round!";
			   		computerScore++; 
			   		lastWinner = "computer"; 
			   		loseSound.volume = 0.2;
			  		loseSound.play();
			  	}
			  	else if (resultDescription == "RS-win" ) {
			  		resultText = "Rock beats scissors. You win this round!";
			  		userScore++; 
			  		lastWinner = "user"; 
			  		winSound.volume = 0.1;
			  		winSound.play();
			  	}
			  	//---- Exception scenarios; e.g., if uses "repeat choice" function on first turn.
				else { 
					resultText = "Did you make a seletion?"; 
					clangSound.volume = .5; 
					clangSound.play(); 
				}
				
		console.log(resultText); 

		//Result text is added to page here. 
		if(lastWinner == "tie"){
				document.getElementById("result-text-display-area").innerHTML = resultText; 
						document.getElementById("result-text-display-area").style.color = "rgb(60, 64, 71)"; 
		}
		else if(lastWinner == "user"){
		document.getElementById("result-text-display-area").innerHTML = resultText; 
		document.getElementById("result-text-display-area").style.color = "darkgreen"; 
		}
		else if(lastWinner == "computer" || lastWinner == "na"){
		document.getElementById("result-text-display-area").innerHTML = resultText; 
		document.getElementById("result-text-display-area").style.color = "darkred"; 
		}
		
	//----update the score board panels. ---------------------------------------------------------------
		document.getElementById("user-score-container-body").innerHTML = userScore; 
		document.getElementById("computer-score-container-body").innerHTML = computerScore; 


// User hits tournament victory threshold: 
	 if(userScore == 5)  {

	 	//display Image -------
	 	var imgBox = document.getElementsByTagName("img")[0];
	 	document.getElementById("result-text-display-area").innerHTML = "YOU WIN THE GAME!"; 

	 	imgBox.setAttribute("src", "a/jam.gif");
	 	champSound.volume = .4; 
	 	champSound.play(); 

	 	document.getElementById("dd").disabled = true;
	    document.getElementById("dd").style.opacity = .2;
	    document.getElementById("result-text-display-area").classList.add('flashing');
	    document.getElementById('btn-repeatLastThrow').setAttribute("onClick","refreshThePage()");
	    document.getElementById('btn-repeatLastThrow').innerHTML = "Play again"
	 }

// User hits tournament victory threshold: 

	 if(computerScore == 5)  {
	 	var imgBox = document.getElementsByTagName("img")[0];
	   document.getElementById("result-text-display-area").innerHTML = "YOU LOSE THE GAME!"; 
	  document.getElementById("result-text-display-area").class = "YOU LOSE THE GAME!";
	 //document.getElementById("result-text-display-area").classList.add('flashing');
	 document.getElementById("result-text-display-area").classList.add('flashing');
	 	imgBox.setAttribute("src", "a/lose.gif");
	 	loseGame.volume = .3; 
	 	loseGame.play(); 
	 	loseGame2.volume = .5; 
	 	loseGame2.play(); 
	 	document.getElementById("dd").disabled = true;
	    document.getElementById("dd").style.opacity = .2
	    document.getElementById('btn-repeatLastThrow').setAttribute("onClick","refreshThePage()");
	    document.getElementById('btn-repeatLastThrow').innerHTML = "Play again";

	 }
    


} //Ends the selection update function


function repeatLastThrow() {
	displayResult(); 
}


function refreshThePage() {
	location.reload();
}

var playSelectSound = function() {
	selectSound.volume = 0.4;
	selectSound.play(); 
}

//-----------------------------------------------


window.onload = function() {
  document.getElementById('btn-repeatLastThrow').setAttribute("onClick","repeatLastThrow()");

 /* var img = document.getElementById('img');
  var container = document.getElementById('container');
  var showImage = function showImage() {
    img.style.display = "inline";
    container.style.backgroundImage = "";
 img.style.display = "none";  */
  }

  

