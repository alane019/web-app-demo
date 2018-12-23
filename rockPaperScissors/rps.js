//alert("You are about to experience something incredible.");

var userScore = 0; 
var computerScore = 0; 


function displayResult() {

	var tempTestForce = new Array('Rock','Paper','Scissors');

    var user_throw = document.getElementById("dd").value;
    console.log(user_throw); 

   /*test*/ 
	var user_repeat_throw = user_throw  //Fallback-code: document.getElementById("user_choice").innerHTML;
	//console.log(user_repeat_throw); 
	/*end test*/ 

    var game_ref = new Array('Rock','Paper','Scissors');
    var game_throw = game_ref[Math.floor(Math.random() * 3)];
    document.getElementById("user_choice").innerHTML = user_throw;
	document.getElementById("computer_choice").innerHTML = game_throw;   //TEST >>Used for forcing results for testing >> tempTestForce[2];

	var resultText = " result text to be displayed"; 
	var resultDescription = "discription of game outcome scenario (e.g. user-is-paper, pc-is-rock)"; 
	//var tempTestResult = "TEST"; 
	
	var gameResult = function() {
		// Paper > Rock;   Rock > Scissors; Scisscors > Paper;
			if(document.getElementById("user_choice").innerHTML == document.getElementById("computer_choice").innerHTML) {
				return  "scenario--tie"; //Note: Previously used a return statement for these and it worked. 
			} //End TIE Scenario ------ Takes care of one of 1/3 of all cases. (3 of 9 possible outcomes)

			//PC is rock 
			else if(document.getElementById("user_choice").innerHTML === "Paper" && document.getElementById("computer_choice").innerHTML === "Rock" ) {
				return "PR-win";  
			}
			else if(document.getElementById("user_choice").innerHTML === "Scissors" && document.getElementById("computer_choice").innerHTML === "Rock" ) {
				return "SR-lose";
			}
			//PC is paper 
			else if(document.getElementById("user_choice").innerHTML === "Rock" && document.getElementById("computer_choice").innerHTML === "Paper" ) {
				return "RP-lose";
			}
			else if(document.getElementById("user_choice").innerHTML === "Scissors" && document.getElementById("computer_choice").innerHTML === "Paper" ) {
				return "SP-win";
			}
			//PC is scissors
			else if(document.getElementById("user_choice").innerHTML === "Rock" && document.getElementById("computer_choice").innerHTML === "Scissors" ) {
				return "RS-win";
			}
			else if(document.getElementById("user_choice").innerHTML === "Paper" && document.getElementById("computer_choice").innerHTML === "Scissors" ) {
				return "PS-lose";
			}

		} // end of gameResult (conditional logic) function. 
	
		console.log(resultDescription); 

		resultDescription = gameResult(); 

		console.log(resultDescription); 
		
		//text for each scenario can be updated here. 
		//result description and text are separated to avoid logic errors when updating display text. Game scenarios will not change. 
		//
		 if(resultDescription == "scenario--tie") { resultText = "A tie! We will disregard this round."; }

		 	//------ Paper win scenarios.
		 	 else if(resultDescription == "RP-lose") { 
			  	resultText = "Paper beats rock. You lose!"; 
			  	computerScore++; 
			  }
			 else if(resultDescription == "PR-win") { 
			 	resultText = "Paper beats rock. You win!"; 
			 	userScore++; 
			 }
			
			  //------- Scissors wins scenarios. 
			  else if (resultDescription == "PS-lose" ) {
			  	resultText = "Scissors beats paper. You lose!";
			  	computerScore++; 
			  }
			  else if (resultDescription == "SP-win" ) {
			  		resultText = "Scissors beats paper. You win!";
			  		userScore++; 
			  	}
			  	// ----- Rock wins scenarios. 
			   else if (resultDescription == "SR-lose" ) {
			   		resultText = "Rock beats scissors. You lose!";
			   		computerScore++; 
			   	}
			  	else if (resultDescription == "RS-win" ) {
			  		resultText = "Rock beats scissors. You win!";
			  		userScore++; 
			  	}

			  	//---- 
				else { resultText = "Not really sure about that right now."; }

		console.log(resultText); 

		//Result text is added to page here. 
		document.getElementById("the result").innerHTML = resultText; 

		document.getElementById("user-score-slot").innerHTML = userScore; 
		document.getElementById("computer-score-slot").innerHTML = computerScore; 


	

} //Ends the selection update function


function repeatLastThrow() {
	displayResult(); 
}


function refreshThePage() {
	location.reload();
}
