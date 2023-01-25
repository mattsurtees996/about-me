let userPoints = 0;
let user = prompt("What can I call you?");

while (!user) {
  user = prompt("Look, your not making this easy, just answer the question!");
}

alert("Hello there " + user + "! Welcome to my guessing game");

let question = confirm(
  "Do you really think you know me that well? Let's see.."
);
if (question == true) {
  alert("I like your confidence, lets gooooo!");
} else {
  alert("WHAT ARE YOU DOING HERE THEN?");
}

//question one ------------------------------------------------------------------------------
function question1() {

  let football = prompt("What football team do i support?").toLowerCase();
  if (
    football == "tottenham hotspurs" ||
    football == "spurs" ||
    football == "tottenham"
  ) {
    alert("WELL DONE, you got one right....so far! Keep going!");
    document.write("<p>You knew what football team I liked</p>")
    userPoints++
  } else if (football == "arsenal" || football == "gooners") {
    alert("I guess somebody has too!");
  } else {
    alert("Something PC");
    document.write("<p>You know nothing about football!</p>")
  }
}

// question two ------------------------------------------------------------
function question2() {

  let foodQuestion = prompt("What is my go to cuisine?").toLowerCase();

  let foodsILike = ["thai", "chinese", "pizza", "pasta"];

  for (let i = 0; i < foodsILike.length; i++) { //is two correct
    if (foodQuestion == foodsILike[i]) {
      alert("Yes I love " + foodQuestion + "!" + " You're doing well, let's see if you can keep it going....");
      alert("Have you kept track of how many you go right?👀");
      userPoints++;
      break;
    }
    alert("Food answer incorrect.");
    break;
  }
}

// question three ---------------------------------------------------------------------------
function question3() {

  let sports = confirm("Did i used to play rugby for Norwich?");

  if (sports == true) {
    alert("Your smashing this! Only 2 questions to go."); //is three correct
    userPoints++;
  } else {
    alert("Come on, pay attention. You really aren't having much luck.");
  }
}
// question four ---------------------------------------------------------------------------
 //question 4

function question4() {
  let question4 = confirm("Have I done a marathon?"); //is four correct
  if (question4 == true) {
    alert("incorrect! I have not done a marathon");
  } else {
    alert("You're right! I have not done a marathon");
    userPoints++;
  }
}

// Question 5 ---------------------------------------------------------------------------

function guessNumber() {
  let userAnswer = prompt("Guess a number between 1 and 10");
  let correctNumber = Math.floor(Math.random() * 11);
  // let correctNumber = 5;

  if (userAnswer < correctNumber) {
    alert("Too low! Try again bozo");
    return false;
  } else if (userAnswer > correctNumber) {
    alert("Too high! Try again bozo");
    return false;
  } else if (isNaN(userAnswer)) {
    alert("You didn't enter a number!");
  } else {
    alert("You guessed correctly. Well done!");
    userPoints++;
  } 
}