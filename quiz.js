// Keep track of the number of questions the user answered correctly
// Provide a final message after the quiz letting the user know the number of questions he or she got right.
// Rank the player. If the player answered all five correctly, give that player the gold crown: 3-4 is a silver crown; 1-2 correct answers is a bronze crown and 0 correct is no crown at all.

//Sets starting number of correctQuestions to 0 
var correctQuestions = 0
var crown = ''

//Logic for Question 1
var question1 = prompt("What is the capital of New York?");
if (question1.toUpperCase() === 'ALBANY') {
   alert("You are correct!");
    correctQuestions = correctQuestions + 1;
} else {
   alert("Sorry, that is incorrect...");
   }

//Logic for Question 2
var question2 = prompt("What is the last name of the 18th president of the United States?");
if (question2.toUpperCase() === 'GRANT') {
   alert("You are correct!");
    correctQuestions += 1;
} else {
   alert("Sorry, that is incorrect...")
}

//Logic for Question 3
var question3 = prompt("What is the art of riding a wave into shore called?");
if (question3.toUpperCase() === 'SURFING') {
   alert("You are correct!");
    correctQuestions += 1;
} else {
   alert("Sorry, that is incorrect...")
}

//Logic for Question 4
var question4 = prompt("What state is Monmouth Beach located?");
if (question4.toUpperCase() === 'NEW JERSEY') {
   alert("You are correct!");
    correctQuestions += 1;
} else {
   alert("Sorry, that is incorrect...")
}

//Logic for Question 5
var question5 = prompt("Who wrote the hit song Coffee in Bed?");
if (question5.toUpperCase() === 'SQUEEZE') {
   alert("You are correct!");
    correctQuestions += 1;
} else {
   alert("Sorry, that is incorrect...")
}
  
//End Ranking 
  if (correctQuestions = 5) {
    alert("You have won a gold crown");
    var crown = 'gold crown';
  } else if (correctQuestions <= 4 && correctQuestions >= 3) {
    alert("You have won a silver crown");
    crown = 'silver crown';
  } else if (correctQuestions <= 2 && correctQuestions >= 1) {
    alert("You have won a bronze crown");
    crown = 'bronze crown';
  } else {
    alert("Sorry, better luck next time");
  }

document.write(crown);