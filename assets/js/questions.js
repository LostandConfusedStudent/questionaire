// Declare array of models for true or false questions
var questions = [
    { q: "Life is rough", a: "t"},
    { q: "Work is fun", a: "f"},
    { q: "My manager loves me", a: "f"},
]

// Score
var score = 0;

// For loop to ask all the questions
for (i = 0; i < questions.length; i++) {
    var answer = confirm(questions[i].q);
    console.log("This is your answer: " + answer);

    // Check your answers
    if (answer === true && questions[i].a === "t" ||
    answer === false && questions[i].a === "f") {
        score++;
        alert("Correct");
    } else {
        alert("Incorrect");
    };
};

alert("Your score: " + score + " / " + questions.length);
console.log("Your score: " + score + " / " + questions.length);