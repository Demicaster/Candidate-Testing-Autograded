const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "" ; 


//TODO: Variables for Part 2
let questions = [
"Who was the first American woman in space? ",
"True or false: 5 kilometer == 5000 meters? ",
"(5 + 3)/2 * 10 = ? ",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
"What is the minimum crew size for the ISS? "
];

let correctAnswers = [
"Sally Ride",
"true",
"40",
"Trajectory",
"3"
];

let candidateAnswers = [];
// candidateAnswers.splice(0);



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require('readline-sync');
candidateName = input.question ("what is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
// candidateAnswer = input.question (question) ;
console.log(candidateAnswers);

for (let i = 0; i < 5; i++) {
  candidateAnswers.push(input.question("Question" + (i+1) + ":"+ questions[i])) 
}
}



function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
// if (candidateAnswer === correctAnswer) {
//   console.log("Correct!")
// }
// else {
//   console.log("Incorrect.") 
// }
let answeredCorrect = 0;
// Added Case insensitive comparing
let lowerCaseCandidateAnswers = candidateAnswers.map(candidateAnswers => candidateAnswers.toLowerCase());
let lowerCaseCorrectAnswers = correctAnswers.map(correctAnswers => correctAnswers.toLowerCase());


for (i = 0; i < 5; i++) {
  if (lowerCaseCandidateAnswers[i] === lowerCaseCorrectAnswers[i] ) {
    console.log("Correct! The answer was " + correctAnswers[i]);
   answeredCorrect = answeredCorrect + 1;
  }
  else {
    console.log("Incorrect. The answer was actually " + correctAnswers[i]) 
    candidateAnswers.splice(i,1)

}
}


  let grade = ((answeredCorrect / 5) * 100);  //TODO 3.2 use this variable to calculate the candidates score.
  
  if (grade >= 80){
    console.log("Congratulations you passed the test with" + grade + "%")
  }
    else {
      console.log("Im sorry but you did not past the test. Your final score was"+ grade +"% you needed a 80% to pass.")
    }


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("hello " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};