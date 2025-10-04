const questions = [
    {
        "question": "What built-in method adds one or more elements to the end of an array and returns the new length?",
        "option1": "last()",
        "option2": "push()",
        "option3": "put()",
        "option4": "pop()",
        "answer": "push()"
    },
    {
        "question": "Which keyword is used to declare a variable that cannot be reassigned after its initial declaration?",
        "option1": "var",
        "option2": "let",
        "option3": "const",
        "option4": "static",
        "answer": "const"
    },
    {
        "question": "Which operator is used for strict equality comparison (checking both value and type)?",
        "option1": "==",
        "option2": "=",
        "option3": "!==",
        "option4": "===",
        "answer": "==="
    },
    {
        "question": "What is the correct syntax for an arrow function with one parameter and a single return statement?",
        "option1": "functionName(param) => { return value; }",
        "option2": "param => value",
        "option3": " => (param) { value }",
        "option4": "function(param) => value",
        "answer": "param => value"
    },
    {
        "question": "Which method is used to remove the last element from an array and return that element?",
        "option1": "splice()",
        "option2": "shift()",
        "option3": "pop()",
        "option4": "unshift()",
        "answer": "pop()"
    },
    {
        "question": "In JavaScript, 'this' keyword refers to the object it belongs to. In a regular function call (not a method), what does 'this' refer to in non-strict mode?",
        "option1": "The current function itself",
        "option2": "The window/global object",
        "option3": "undefined",
        "option4": "The parent object",
        "answer": "The window/global object"
    },
    {
        "question": "What does the `isNaN()` function check for?",
        "option1": "If a value is equal to 'Null'",
        "option2": "If a value is 'Not a String'",
        "option3": "If a value is 'Not a Number'",
        "option4": "If a value is 'Negative'",
        "answer": "If a value is 'Not a Number'"
    },
    {
        "question": "How do you correctly write an IF statement to check if 'i' is NOT equal to 5?",
        "option1": "if (i <> 5)",
        "option2": "if i != 5",
        "option3": "if (i !== 5)",
        "option4": "if (i =! 5)",
        "answer": "if (i !== 5)"
    },
    {
        "question": "What is a **Closure** in JavaScript?",
        "option1": "A function with no return value.",
        "option2": "A function having access to its parent scope's variables even after the parent function has finished executing.",
        "option3": "A variable declared inside an if-else block.",
        "option4": "A synchronous function that is blocked by the event loop.",
        "answer": "A function having access to its parent scope's variables even after the parent function has finished executing."
    },
    {
        "question": "Which array method is used to create a **new array** by calling a function for every element in the array?",
        "option1": "forEach()",
        "option2": "filter()",
        "option3": "reduce()",
        "option4": "map()",
        "answer": "map()"
    },
    {
        "question": "What are the three possible states of a JavaScript **Promise**?",
        "option1": "Pending, Resolving, Rejected",
        "option2": "Pending, Fulfilled, Rejected",
        "option3": "Unresolved, Executing, Resolved",
        "option4": "New, Complete, Error",
        "answer": "Pending, Fulfilled, Rejected"
    },
    {
        "question": "What will be logged to the console by the following code snippet?\n\n```javascript\nconsole.log(myVar);\nvar myVar = 10;\n```",
        "option1": "10",
        "option2": "ReferenceError: myVar is not defined",
        "option3": "undefined",
        "option4": "null",
        "answer": "undefined"
    },
    {
        "question": "Given the object `const user = { id: 1, name: 'Alex' };`, how do you correctly use **object destructuring** to get the `name` property?",
        "option1": "const name = user.name;",
        "option2": "const { name } = user;",
        "option3": "const [name] = user;",
        "option4": "const name = user[1];",
        "answer": "const { name } = user;"
    },
    {
        "question": "Which of the following values is **not** considered 'falsy' in JavaScript?",
        "option1": "0",
        "option2": "\"\" (empty string)",
        "option3": "'false'",
        "option4": "null",
        "answer": "'false'"
    },
    {
        "question": "What is the most common and generally fastest way to select a single element in the DOM by its **ID**?",
        "option1": "document.querySelector('#myID')",
        "option2": "document.getElementsByClassName('myID')[0]",
        "option3": "document.getElementById('myID')",
        "option4": "document.getElementByTag('div')",
        "answer": "document.getElementById('myID')"
    }
];

let mainContainer = document.getElementById("mainContainer");
let question = document.getElementById("question");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let score = document.getElementById("score");
let currentQuestionNo = document.getElementById("currentQuestionNo");
let lastQuestion = document.getElementById("lastQuestion");
let currentQuestion = 0;
let totalQuestion = questions.length;

function displayScore() {
    console.log("your score : ")
}


function loadNextQuestion() {

    currentQuestion++;
    if (currentQuestion === totalQuestion) {
        let next = document.getElementById("next");
        next.textContent = "Submit";
        alert("Quiz finished");
    }
    else if (currentQuestion > totalQuestion) {
        displayScore();
    }
    else {
        loadQuestion(currentQuestion);

    }
}

function loadPreviousQuestion() {
    currentQuestion--;
    if (currentQuestion < 0) {
        return;
    }
    else {
        loadQuestion(currentQuestion);
    }
}
function loadQuestion(index) {
    if (index === totalQuestion) {
        return;
    }
    lastQuestion.textContent = totalQuestion;
    var data = questions[index];
    question.textContent = data.question;
    currentQuestionNo.textContent = index + 1;
    option1.textContent = data.option1;
    option2.textContent = data.option2;
    option3.textContent = data.option3;
    option4.textContent = data.option4;

}

loadQuestion(currentQuestion);


