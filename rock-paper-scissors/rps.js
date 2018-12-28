var userScore = 0; 
var computerScore = 0; 
var lastWinner = "na"; 

var loseGame = new Audio("a/loseGame.wav" );
var selectSound = new Audio("a/click.wav");
var clangSound = new Audio("a/clank.wav");
var tieSound = new Audio("a/pongNoise.wav");
var winSound = new Audio("a/ringGet.wav");
var champSound = new Audio("a/FinalCountdown.wav");
var loseSound = new Audio("a/loseRound.wav");
var loseGame2 = new Audio("a/loseSound2.wav");

var user_repeat_throw = "init";


var resetSelectBox = function() {
	document.getElementById("dd").value = "--";
}

/* helper function for wait command. */ 
//const delay = ms => new Promise(res => setTimeout(res, ms));

var repeatLastMode = "off";
//var cssDropDownUsed = false; 


//CSS Drop Down Clicked
var ddOptionClicked = function(opt) {
	console.log("ddOptionClicked - Did run. ");
	
	document.getElementById("check01").checked = false;

	 document.getElementsByClassName("cell-ish")[0].style.display = "block";
	 document.getElementsByClassName("cell-ish")[1].style.display = "block";

	displayResult(opt); 

}

function checkBoxClicked() {
		 document.getElementsByClassName("cell-ish")[0].style.display = "none";
		 document.getElementsByClassName("cell-ish")[1].style.display = "none";

}
		
function displayResult(opt) {

	document.getElementById("result-text-display-area").style ="font-size:20px";	
	 console.log(repeatLastMode); 

	 /* var tempTestForce = new Array('Rock','Paper','Scissors'); */

	 if (repeatLastMode == "on") {
	 	var user_throw  = document.getElementById('user-choice-container-body').innerHTML;
	 	console.log("User throw assigned in repeatMode condit: " + user_throw);
	 	repeatLastMode = "off"; 

	} 
	/* 
	else if (cssDropDownUsed) {
		console.log("CSS dropdown assignment area reached");
	} */ 

	else { 
    var user_throw = opt; 
    	console.log("dd value assigned to user_throw: " + user_throw);
    	 console.log(repeatLastMode); 
    }

    console.log(user_throw); 

    //display user and computer choice container divs again
     document.getElementsByClassName("cell-ish")[0].style.display = "block";
	 document.getElementsByClassName("cell-ish")[1].style.display = "block";


   if(user_throw == "--") {return; } 

	var user_repeat_throw = user_throw;
	console.log("user_repeat_throw: " + user_repeat_throw);

    var game_ref = new Array('Rock','Paper','Scissors');
    var game_throw = game_ref[Math.floor(Math.random() * 3)];

 // CHOICE FADE IN LOGIC [[[[[[[[[[[]]]]}}}}}]][[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]][[[[[[[[[]]]]]]]]]

 	/* declare choice text setting functions. */ 
    var setUserChoiceDisplayBox = function(text) { // FOR USER 
			//ucd is 'user choice display'
    	var	ucd = document.getElementById("user-choice-container-body");
    	//set passed in value to display on page as user choice
     	ucd.innerHTML = text; // IMPORTANT 

    	ucd.classList.remove("is-paused");
    	ucd.display = "block";  
    }

 	var setComputerChoiceDisplayBox = function(text) {   // >> FOR COMPUTER 

    	var ccd = document.getElementById("computer-choice-container-body");
    	ccd.innerHTML = text; 
    	ccd.classList.remove("is-paused");
    }
 // [[[[]]]] end of display setting [[[[[[[[[[[]]]]}}}}}]]]]]]]]]]]]]]][[[[[[[[[]]]]]]]]][[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]
    console.log("user_throw, just before passed to selection display set function: " + user_throw);

    var computer_choice = game_throw; 

    var user_choice = user_throw;

    setComputerChoiceDisplayBox(computer_choice);
    setUserChoiceDisplayBox(user_choice);

	var resultText = "result text to be displayed"; 
	var resultDescription = "description of game outcome scenario (e.g. user-is-paper, pc-is-rock)"; 
	//var tempTestResult = "TEST"; 
	
	var gameResult = function() {
		// Paper > Rock;   Rock > Scissors; Scisscors > Paper;
			if(user_choice == computer_choice) {
				return  "scenario--tie"; 
			} //End TIE Scenario ------ 

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
		 	document.getElementById("result-text-display-area").style ="font-size:35px";	
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
					resultText = "Did you make a selection?"; 
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

		document.getElementById('btn-repeatLastThrow').disabled = false;
 		document.getElementById('btn-repeatLastThrow').style.opacity = .9;


// User hits tournament victory threshold: -------------------------------------------------------------------------------------
	 if(userScore == 5)  {

	 	//display Image -------
	 	var imgBox = document.getElementsByTagName("img")[0];
	 	document.getElementById("result-text-display-area").innerHTML = "YOU WIN THE GAME!"; 
	 		 	document.getElementById("result-text-display-area").style = "font-size: 33px; color: darkgreen; font-family: impact; min-height:0px"; 


	 	imgBox.setAttribute("src", "a/jam.gif");

	 	var imgContainer = document.getElementById("imgContainer"); 
	 	imgContainer.classList.remove("is-paused");

imgContainer.style="margin-top: -200px;"

	 	champSound.volume = .4; 
	 	champSound.play(); 



	document.getElementById("dd").disabled = true;
	    document.getElementById("dd").style.opacity = .2
	    document.getElementById('btn-repeatLastThrow').setAttribute("onClick","refreshThePage()");

	    document.getElementById('btn-repeatLastThrow').innerHTML = "Try Again";
	    document.getElementById('btn-repeatLastThrow').style = "background-color: lightgreen; margin-top: 16px";

	    document.getElementById('dd-div').style="display:none";
	    document.getElementById("check01").disabled = true;
	    document.getElementById("check01").style.opacity = .2;
	    document.getElementById("div-table-thing").style="display:none";

	  document.getElementsByTagName("label")[0].style =  "display:none"; 
	     document.getElementById("menu").style =  "display: none"; 
	 }
// Computer hits tournament victory threshold: ------------------------------------------------------------------------------------
	 if(computerScore == 5)  {
	 	var imgBox = document.getElementsByTagName("img")[0];
	   document.getElementById("result-text-display-area").innerHTML = "YOU LOSE THE GAME!"; 
	  document.getElementById("result-text-display-area").style = "font-size: 33px; color: darkred; font-family: impact; min-height:0px"; 

	 document.getElementById("result-text-display-area").classList.add('flashing');
	 	imgBox.setAttribute("src", "a/lose.gif");
	 	
	 	var imgContainer = document.getElementById("imgContainer"); 
	 	imgContainer.classList.remove("is-paused");
	 	

imgContainer.style="margin-top: -200px;"

	 	loseGame.volume = .3; 
	 	loseGame.play(); 
	 	loseGame2.volume = .5; 
	 	loseGame2.play(); 
	 	document.getElementById("dd").disabled = true;
	    document.getElementById("dd").style.opacity = .2
	    document.getElementById('btn-repeatLastThrow').setAttribute("onClick","refreshThePage()");

	    document.getElementById('btn-repeatLastThrow').innerHTML = "Try Again";
	    document.getElementById('btn-repeatLastThrow').style = "background-color: lightgreen; margin-top: 16px";

	    document.getElementById('dd-div').style="display:none";
	    document.getElementById("check01").disabled = true;
	    document.getElementById("check01").style.opacity = .2;
	    document.getElementById("div-table-thing").style="display:none";

	  document.getElementsByTagName("label")[0].style =  "display:none"; 
	     document.getElementById("menu").style =  "display: none"; 


	 }
   
  // Reset the drop-down selection box for user.
 resetSelectBox();

} //Ends the selection update function ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function repeatLastThrow() {

	repeatLastMode = "on";
	displayResult("na"); 
}

/* function aClick () {
	console.log("body click ('aClick()' function ran.  ")
	var u = document.getElementById('user-choice-container-body'); 
 	u.style.display = "none";

 	// u.classList.add("is-paused");	
} */ 


function refreshThePage() {
	location.reload();
}

var playSelectSound = function() {
	selectSound.volume = 0.4;
	selectSound.play(); 
}

   // A D D     F A D E   P A U S E  ------------------------------------------------]]]]]]]]]]]]
var addFadePause = function() { //CSS Fade pause reset
	console.log("yes, addFadePause did run. ")
	//user display list two 
}

var ddClicked = function() {
	playSelectSound();
	addFadePause(); 
}

//-----------------------------------------------~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[[]]
// WINDOW ONLOAD 
window.onload = function() {

var brlt = document.getElementById('btn-repeatLastThrow');
brlt.setAttribute("onClick","repeatLastThrow()");
brlt.disabled = true;
brlt.style.opacity = .2;

document.getElementById("user-choice-container-body").style = ("display: none");
//**
//var uccb = document.getElementById('user-choice-container-body');

} // end window.onload function.  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[[]]

//------
//---- M o d a l   >>  E n d 
//------

/* modal window functions --------------------------------------------------- */ 
var openModal = function() {
	document.getElementById('myModal').classList.remove("is-paused");
 	document.getElementById('myModal').style = "display:block";
  }
// When the user clicks on <span> (x), close the modal
var closeModal = function() {
	document.getElementById('myModal').style = "display:none";  
 } 

window.onclick = function(event) {
 modal = document.getElementById('myModal')

  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/* --------------------------------------------------------------------------- */ 
