# 💡 JavaScript Quiz App

## 📝 Overview

This repository contains a simple, interactive, front-end quiz application built using **Vanilla JavaScript**, HTML, and CSS. The app features multiple-choice questions about core JavaScript concepts, allowing users to track their progress, navigate questions, and receive a final score.

The code adheres to modern web development standards, utilizing efficient DOM manipulation and separating data (questions) from the application logic.

## ✨ Features

  * **15 JavaScript Questions:** A challenging set of multiple-choice questions.
  * **Single Selection Logic:** Users must select only one option per question.
  * **Progress Tracking:** Displays the current question number (e.g., "No: 3 of 15").
  * **Navigation:** Allows users to move **Forward** (Next/Submit) and **Backward** (Back).
  * **Validation:** Prevents navigation to the next question until an option is selected.
  * **State Persistence:** Remembers the user's selected answer when navigating back to a previous question.
  * **Score Display:** Calculates and displays the final score upon completion.
  * **Reset Option:** Allows the user to restart the quiz easily.

## 🚀 Getting Started

Follow these simple steps to get the quiz running locally.

### Prerequisites

You only need a modern web browser (Chrome, Firefox, Edge, etc.).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YourUsername/your-repo-name.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd your-repo-name
    ```
3.  **Open the file:**
    Open the `index.html` file in your preferred web browser.

Alternatively, you can use a local development server (like VS Code's Live Server extension) for better file watching.

## 📂 Project Structure

The application is composed of three main files:

| File | Description |
| :--- | :--- |
| `index.html` | The main structure of the quiz (question display, options, buttons). |
| `script.js` | The core JavaScript logic: question handling, state management, event listeners, validation, and scoring. |
| `style.css` | Handles the visual styling, layout, and appearance of selected options. |

## 🛠️ Code Highlights

The primary logic for handling quiz state and user interaction resides in `script.js`.

### Data Management

The questions are stored in a `const questions` array, and user responses are stored in the `userAnswers` array.

```javascript
// Initialization of user answer storage:
const userAnswers = new Array(totalQuestion).fill(null); 
```

### Event Handling & Single Selection

Event listeners are attached to all options using `forEach`. The key to single selection is removing the class from all options before adding it to the clicked one:

```javascript
optionEls.forEach(option => {
    option.addEventListener('click', function selectOption() {
        // Enforce single selection
        optionEls.forEach(opt => opt.classList.remove("selected"));
        option.classList.add("selected");
        // Store answer text
        userAnswers[currentQuestionIndex] = option.textContent.trim(); 
    });
});
```

### Validation

The `validateAndMove` function checks for a selection before advancing:

```javascript
function validateAndMove() {
    const selectedOption = optionsContainer.querySelector('.selected');
    
    if (!selectedOption) {
        alert("Please select an option before moving to the next question.");
        return; // Stops the function here
    }
    // ... logic to advance or submit ...
}
```

## 🤝 Contribution

Feel free to fork this repository, submit issues, or propose enhancements via pull requests\! Suggestions for new JavaScript questions are always welcome.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
