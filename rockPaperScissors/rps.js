//alert("You are about to experience something incredible.");

function displayResult() {

	var tempTestForce = new Array('Rock','Paper','Scissors');


    var user_throw = document.getElementById("dd").value;
    console.log(user_throw); 

   /*test*/ 
	var user_repeat_throw = user_throw  //Fallback-code: document.getElementById("user_choice").innerHTML;
	console.log(user_repeat_throw); 
	/*end test*/ 

    var game_ref = new Array('Rock','Paper','Scissors');
    var game_throw = game_ref[Math.floor(Math.random() * 3)];
    document.getElementById("user_choice").innerHTML = user_throw;
	document.getElementById("computer_choice").innerHTML = game_throw;   //TEST >>Used for forcing results for testing >> tempTestForce[2];

	

	//var tempTestResult = "TEST"; 
	
	var gameResult = function() {
		// Paper > Rock;   Rock > Scissors; Scisscors > Paper;
		if(document.getElementById("user_choice").innerHTML == document.getElementById("computer_choice").innerHTML) {
			return "A tie!";
		} //End TIE Scenario ------ Takes care of one of 1/3 of all cases. (3 of 9 possible outcomes)

		//PC is rock 
		else if(document.getElementById("user_choice").innerHTML === "Paper" && document.getElementById("computer_choice").innerHTML === "Rock" ) {
			return "Paper beats rock. You win!";
		}
		else if(document.getElementById("user_choice").innerHTML === "Scissors" && document.getElementById("computer_choice").innerHTML === "Rock" ) {
			return "Rock beats scissors. You lose!";
		}

		//PC is paper 
		else if(document.getElementById("user_choice").innerHTML === "Rock" && document.getElementById("computer_choice").innerHTML === "Paper" ) {
			return "Paper beats rock. You lose!";
		}
		else if(document.getElementById("user_choice").innerHTML === "Scissors" && document.getElementById("computer_choice").innerHTML === "Paper" ) {
			return "Scissors beaks paper. You win!";
		}

		//PC is scissors
		else if(document.getElementById("user_choice").innerHTML === "Rock" && document.getElementById("computer_choice").innerHTML === "Scissors" ) {
			return "Rock beats scissors. You win!";
		}
		else if(document.getElementById("user_choice").innerHTML === "Paper" && document.getElementById("computer_choice").innerHTML === "Scissors" ) {
			return "Scissors beats paper. You lose!";
		}
	
	} 

		document.getElementById("the result").innerHTML = gameResult(); 

	} //Ends the selection update function

function repeatLastThrow() {
	displayResult(); 
}
