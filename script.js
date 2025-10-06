// ==========================================================
// 1. QUESTION DATA
// ==========================================================
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


const mainContainer = document.getElementById("mainContainer");
const questionEl = document.getElementById("question");
const scoreEl = document.getElementById("score");
const currentQuestionNoEl = document.getElementById("currentQuestionNo");
const lastQuestionEl = document.getElementById("lastQuestion");
const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");
const optionsContainer = document.getElementById("optionsContainer");
const optionEls = optionsContainer ? optionsContainer.querySelectorAll('li') : [];
const option1El = document.getElementById("option1");
const option2El = document.getElementById("option2");
const option3El = document.getElementById("option3");
const option4El = document.getElementById("option4");

let currentQuestionIndex = 0;
const totalQuestion = questions.length;
let marks = 0;
const userAnswers = new Array(totalQuestion).fill(null);


// ==========================================================
// 3. CORE LOGIC FUNCTIONS
// ==========================================================

function displayScore() {
    scoreEl.innerHTML = `
        <h2>Your Score is: ${marks} / ${totalQuestion}</h2>
        <button class="reset" onclick="window.location.reload()">Reset</button>`;
    scoreEl.classList.remove("none");
    mainContainer.classList.add("none");
}

function calculateFinalScore() {
    marks = 0;
    for (let i = 0; i < totalQuestion; i++) {
        if (userAnswers[i] && userAnswers[i] === questions[i].answer) {
            marks++;
        }
    }
}

// Function executed when 'Next' or 'Submit' is clicked (The new checkOption)
function validateAndMove() {
    const selectedOption = optionsContainer.querySelector('.selected');

    if (!selectedOption) {
        alert("Please select an option before moving to the next question.");
        return;
    }

    // Move to the next question or submit
    if (currentQuestionIndex === totalQuestion - 1) {
        calculateFinalScore();
        displayScore();
    }
    else {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
}

function loadPreviousQuestion() {
    currentQuestionIndex--;
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
        return;
    }
    loadQuestion(currentQuestionIndex);
}

// Loads the question and options into the DOM
function loadQuestion(index) {
    if (index >= totalQuestion || index < 0) {
        return;
    }

    // 1. Update question count
    lastQuestionEl.textContent = totalQuestion;
    const data = questions[index];
    questionEl.textContent = data.question;
    currentQuestionNoEl.textContent = index + 1;

    // 2. Update option text content
    option1El.textContent = data.option1;
    option2El.textContent = data.option2;
    option3El.textContent = data.option3;
    option4El.textContent = data.option4;

    // 3. Clear existing highlight and apply highlight for stored answer
    optionEls.forEach(option => option.classList.remove("selected"));

    const previousAnswerText = userAnswers[index];
    if (previousAnswerText) {
        // Find the matching option element and apply the highlight
        optionEls.forEach(option => {
            if (option.textContent.trim() === previousAnswerText.trim()) {
                option.classList.add("selected");
            }
        });
    }

    // 4. Update 'Next' button text
    if (index === totalQuestion - 1) {
        nextBtn.textContent = "Submit";
    } else {
        nextBtn.textContent = "Next";
    }
}


// ==========================================================
// 4. EVENT LISTENERS (Attached once on load)
// ==========================================================

// Listener for Option Selection (Single Selection Enforcement)
optionEls.forEach(option => {
    option.addEventListener('click', function selectOption() {
        optionEls.forEach(opt => opt.classList.remove("selected"));
        option.classList.add("selected");
        userAnswers[currentQuestionIndex] = option.textContent.trim();
    });
});

// Listener for Navigation Buttons
if (nextBtn) {
    nextBtn.onclick = validateAndMove;
}
if (backBtn) {
    backBtn.onclick = loadPreviousQuestion;
}

// Initial load of the first question
loadQuestion(currentQuestionIndex);