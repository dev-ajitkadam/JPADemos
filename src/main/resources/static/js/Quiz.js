// quizpage js

// quiz questions data
const javaQuestions = [
    {
        question: "Which of these is a valid way to create a thread in Java?",
        options: [
            "Extending the Runnable interface",
            "Implementing the Thread class",
            "Implementing the Callable interface",
            "Both A and C"
        ],
        answer: 3
    },
    {
        question: "What is the purpose of the final keyword in Java?",
        options: [
            "To declare a constant",
            "To prevent method overriding",
            "To prevent inheritance",
            "All of the above"
        ],
        answer: 3
    },
    {
        question: "What is the output of the following code?\n\njava\nint x = 10;\nx += (x = 5) * 2;\nSystem.out.println(x);\n",
        options: [
            "20",
            "30",
            "15",
            "Throws an error"
        ],
        answer: 0
    },
    {
        question: "What is the difference between HashMap and Hashtable in Java?",
        options: [
            "HashMap is synchronized, Hashtable is not",
            "Hashtable is synchronized, HashMap is not",
            "Both are synchronized",
            "None of the above"
        ],
        answer: 1
    },
    {
        question: "What will the following Java program print?\n\njava\npublic class Test {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3};\n        System.out.println(arr[3]);\n    }\n}\n",
        options: [
            "1",
            "2",
            "ArrayIndexOutOfBoundsException",
            "Compile-time error"
        ],
        answer: 2
    },
    {
        question: "What is the role of the transient keyword in Java?",
        options: [
            "Prevents variable serialization",
            "Marks a method as deprecated",
            "Ensures variable persistence",
            "None of the above"
        ],
        answer: 0
    },
    {
        question: "Which of these is not a Java access modifier?",
        options: [
            "private",
            "protected",
            "public",
            "default"
        ],
        answer: 3
    },
    {
        question: "What will be the output of the following code snippet?\n\njava\npublic class Main {\n    public static void main(String[] args) {\n        String s = null;\n        System.out.println(s.length());\n    }\n}\n",
        options: [
            "Throws a NullPointerException",
            "Prints null",
            "Throws a compile-time error",
            "Prints 0"
        ],
        answer: 0
    },
    {
        question: "What is the default value of a local variable in Java?",
        options: [
            "null",
            "0",
            "Depends on the type",
            "No default value"
        ],
        answer: 3
    },
    {
        question: "Which of these collections guarantees that no duplicate elements are stored?",
        options: [
            "ArrayList",
            "LinkedList",
            "HashSet",
            "TreeMap"
        ],
        answer: 2
    }
];

const pythonQuestions = [
    {
        question: "What is the output of the following Python code?\n\npython\nx = [1, 2, 3]\ny = x\nx[0] = 0\nprint(y)\n",
        options: [
            "[1, 2, 3]",
            "[0, 2, 3]",
            "Throws an error",
            "None of the above"
        ],
        answer: 1
    },
    {
        question: "What is the difference between a list and a tuple in Python?",
        options: [
            "Lists are mutable, tuples are immutable",
            "Tuples are mutable, lists are immutable",
            "Both are immutable",
            "None of the above"
        ],
        answer: 0
    },
    {
        question: "What does the @staticmethod decorator do in Python?",
        options: [
            "Defines a method that can only access class-level data",
            "Defines a method that can be called without an instance",
            "Defines a method that cannot be overridden",
            "None of the above"
        ],
        answer: 1
    },
    {
        question: "What will be the output of the following Python code?\n\npython\ndef func(a, b=[]):\n    b.append(a)\n    return b\n\nprint(func(1))\nprint(func(2))\n",
        options: [
            "[1], [2]",
            "[1], [1, 2]",
            "[2], [2, 2]",
            "Throws an error"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of the with statement in Python?",
        options: [
            "To create an anonymous block",
            "To manage resources like files",
            "To define a generator",
            "None of the above"
        ],
        answer: 1
    },
    {
        question: "Which of these is not a valid Python data structure?",
        options: [
            "List",
            "Dictionary",
            "Vector",
            "Set"
        ],
        answer: 2
    },
    {
        question: "What does the following Python snippet do?\n\npython\nmy_dict = {x: x**2 for x in range(5)}\n",
        options: [
            "Creates a list of squares",
            "Creates a dictionary of numbers mapped to their squares",
            "Throws a syntax error",
            "Creates a set of numbers"
        ],
        answer: 1
    },
    {
        question: "What will the following code output?\n\npython\ndef func(x, y=5):\n    return x + y\n\nprint(func(3))\n",
        options: [
            "8",
            "5",
            "3",
            "Throws an error"
        ],
        answer: 0
    },
    {
        question: "What does the *args syntax do in Python function definitions?",
        options: [
            "Passes a single argument as a list",
            "Allows passing a variable number of arguments",
            "Passes keyword arguments",
            "None of the above"
        ],
        answer: 1
    },
    {
        question: "What will be the output of the following Python code?\n\npython\nprint(bool([]))\n",
        options: [
            "True",
            "False",
            "None",
            "Throws an error"
        ],
        answer: 1
    }
];

const javascriptQuestions = [
    {
        question: "What is the output of the following JavaScript code?\n\njavascript\nconsole.log(0.1 + 0.2 === 0.3);\n",
        options: ["true", "false", "undefined", "Throws an error"],
        answer: 1
    },
    {
        question: "What does the map() method do in JavaScript?",
        options: [
            "Creates a new array with elements that pass a condition",
            "Creates a new array by applying a function to each element",
            "Reduces an array to a single value",
            "None of the above"
        ],
        answer: 1
    },
    {
        question: "Which of the following is not a valid way to declare a variable in JavaScript?",
        options: ["var", "let", "const", "define"],
        answer: 3
    },
    {
        question: "What will the following code snippet output?\n\njavascript\nconsole.log(typeof null);\n",
        options: ["object", "null", "undefined", "Throws an error"],
        answer: 0
    },
    {
        question: "What is the purpose of the async keyword in JavaScript?",
        options: [
            "To define a synchronous function",
            "To define a function that returns a promise",
            "To pause execution of a function",
            "None of the above"
        ],
        answer: 1
    },
    {
        question: "What will this code output?\n\njavascript\nfunction test() {\n    var a = 10;\n}\nconsole.log(a);\n",
        options: ["10", "undefined", "Throws an error", "null"],
        answer: 2
    },
    {
        question: "What is the difference between == and === in JavaScript?",
        options: [
            "No difference",
            "== compares values, === compares values and types",
            "=== compares values, == compares values and types",
            "None of the above"
        ],
        answer: 1
    },
    {
        question: "What will the following code output?\n\njavascript\nconsole.log(1 + '2');\n",
        options: ["3", "12", "NaN", "Throws an error"],
        answer: 1
    },
    {
        question: "What is the purpose of the Promise.all() method?",
        options: [
            "Waits for all promises to resolve",
            "Resolves the first promise that completes",
            "Rejects if any promise is rejected",
            "Both A and C"
        ],
        answer: 3
    },
    {
        question: "What will this code output?\n\njavascript\n(function() {\n    console.log(typeof arguments);\n})();\n",
        options: ["array", "object", "undefined", "Throws an error"],
        answer: 1
    }
];

const htmlQuestions = [
    {
        question: "Which of the following is a semantic HTML tag?",
        options: ["<div>", "<article>", "<span>", "<b>"],
        answer: 1
    },
    {
        question: "What does the alt attribute in the <img> tag do?",
        options: [
            "Displays text if the image fails to load",
            "Adds a tooltip to the image",
            "Defines the image size",
            "None of the above"
        ],
        answer: 0
    },
    {
        question: "What is the purpose of the <meta> tag in HTML?",
        options: [
            "To include JavaScript files",
            "To define metadata about the document",
            "To link external stylesheets",
            "None of the above"
        ],
        answer: 1
    },
    {
        question: "Which of these is not a valid HTML5 element?",
        options: ["<footer>", "<section>", "<blink>", "<main>"],
        answer: 2
    },
    {
        question: "What will the following code do?\n\nhtml\n<a href='#' target='_blank'>Click me</a>\n",
        options: [
            "Opens the link in a new tab",
            "Adds a tooltip to the link",
            "Does nothing",
            "Throws an error"
        ],
        answer: 0
    },
    {
        question: "What is the difference between <strong> and <b> tags in HTML?",
        options: [
            "No difference",
            "<strong> conveys importance, <b> is purely visual",
            "<b> conveys importance, <strong> is purely visual",
            "None of the above"
        ],
        answer: 1
    },
    {
        question: "Which attribute in the <script> tag ensures the script runs after HTML parsing?",
        options: ["async", "defer", "src", "type"],
        answer: 1
    },
    {
        question: "What is the default method for a <form> submission?",
        options: ["POST", "GET", "PUT", "DELETE"],
        answer: 1
    },
    {
        question: "What is the purpose of the placeholder attribute in the <input> tag?",
        options: [
            "Sets the default value",
            "Provides hint text",
            "Adds a tooltip",
            "None of the above"
        ],
        answer: 1
    },
    {
        question: "Which of these HTML attributes is used to specify inline CSS?",
        options: ["class", "id", "style", "css"],
        answer: 2
    }
];

// Initialize variables
let questions;
let currentQuestionIndex = 0;
let score = 0;
let time = 0;
let attempt = 0;
let timerInterval;

// Select elements
const content = document.querySelector('#content');
const options = document.querySelectorAll('.options');
const timerDisplay = document.querySelector('.timer-s');
const scoreDisplay = document.querySelector('.score-d');
const nextButton = document.querySelector('.next-btn');

// Get quiz details from URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('Category');
const username = urlParams.get('username');
const number = urlParams.get("number")

// Assign questions based on category
if (category === "JAVA") {
    questions = javaQuestions;
} else if (category === "PYTHON") {
    questions = pythonQuestions;
} else if (category === "JAVASCRIPT") {
    questions = javascriptQuestions;
} else {
    questions = htmlQuestions;
}

// Load question
function lodeQuestion() {
    const currentQution = questions[currentQuestionIndex];

    // Update question text
    content.innerText = `Q. ${currentQution.question}`;
    document.querySelector('.q-name').innerHTML = `${category}`
    options.forEach((option, index) => {
        option.innerText = currentQution.options[index];
        option.disabled = false;
        option.style.backgroundColor = "";
        option.style.color = ""

        option.onclick = () => {

            options.forEach((btn) => (btn.disabled = true));
            

            attempt++;
            if (index === currentQution.answer) {
                score++;
                option.style.backgroundColor = "#32CD32";
                option.style.color = "#FFFFFF"
            } else {
                option.style.backgroundColor = "#FF474D";
                options[currentQution.answer].style.backgroundColor = "#32CD32";
                options[currentQution.answer].style.color = "#FFFFFF";
                option.style.color = "#FFFFFF"

            }
            scoreDisplay.innerText = `Score: ${score}`;
        };
    });
}


//  timer
function startTimer() {
    timerInterval = setInterval(() => {
        time++;
        timerDisplay.innerText = `${time}s`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}


    

// Next question button logic
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    document.querySelector('.q-counter').innerHTML = `${currentQuestionIndex +1}/10`
    if (currentQuestionIndex < questions.length) {
        lodeQuestion();
    } else {
        stopTimer();
        window.location.href = `result.html?username=${username}&time=${time}&score=${score}&attempted=${attempt}&number=${number}`;
        Result();
    }
});

startTimer();
lodeQuestion();


