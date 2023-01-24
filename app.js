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

//question one
let football = prompt("What football team do i support?").toLowerCase();
if (
  football == "tottenham hotspurs" ||
  football == "spurs" ||
  football == "tottenham"
) {
  alert("WELL DONE, you got one right....so far! Keep going!");
} else if (football == "arsenal" || football == "gooners") {
  alert("I guess somebody has too!");
} else {
  alert("bum boy");
}

// question two
let foodQuestion = prompt("What is my go to cuisine?").toLowerCase();

let foodsILike = ["thai", "chinese", "pizza", "pasta"];

for (let i = 0; i < foodsILike.length; i++) {
  if (foodQuestion == foodsILike[i]) {
    alert(
      "Yes I love " +
        foodQuestion +
        "!" +
        " Your doing well, let's see if you can keep it going...."
    );
    userPoints++;
  }
}

alert("Have you kept track of how many you go right?👀");

// question three
let sports = confirm("Did i used to play rugby for Norwich?");

if (sports == true) {
  alert("Your smashing this! Only 2 questions to go.");
  userPoints++;
} else {
  alert("Come on, pay attention. You really aren't having much luck.");
}

// question four
let question4 = confirm("Is my favourite cuisine Thai?");
if (question4 == true) {
  console.log("correct!");
} else {
  console.log("incorrect!");
}

// question five
let question6 = confirm("Im thinking of a number ");
