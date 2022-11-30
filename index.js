var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What is your Name? ");
console.log("Hi " + userName + "Do You Know Atul? ");

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  
  if (userAnswer === answer){
    console.log("Yes you are wright");
    score = score + 1;
  } else {
    console.log("You are Wrong Try Again");
    score = score;
  }
    console.log("Your Score is " + score);
    console.log("____________")
  
  if (score === 3){
  console.log("Level One Completed");
  console.log("__________")
}
  if (score === 5){
   console.log("You Know Me very well");
  console.log("__________")
 }
 if(score === 1){
    console.log("You need to Know me");
 }
}

play ("What is My Name","Atul" );

play ("What is my Age","22" );

play ("What is my City","Ashta" );

play ("What is my Love","Maa" );

play ("I Lives in ","Ashta" );