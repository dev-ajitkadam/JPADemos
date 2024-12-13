// Get query parameters
const urlParams1 = new URLSearchParams(window.location.search);
const username1 = urlParams1.get("username") || "Guest";
const number = urlParams1.get("number") || "Unknown";
const time1 = parseInt(urlParams1.get("time") || "0", 10);
const score1 = parseInt(urlParams1.get("score") || "0", 10);
const attempted = parseInt(urlParams1.get("attempted") || "0", 10);
const totalQuestions = 10; // Total questions for the quiz
const wrong = attempted - score1;
const percentage = ((score1 / totalQuestions) * 100).toFixed(2);

// Create user data object
const userData = {
    name: username1,
    number: number,
    totakTimeTaken: time1,
    attemptedQ: attempted,
    correctA: score1,
    persentage: percentage,
};

// Send data to backend using fetch
fetch("http://localhost:8080/setdata", {
    method: "POST",
    headers: {
        "Content-Type": "application/json", // Specify JSON content type
    },
    body: JSON.stringify(userData), // Stringify userData object
})
    .then((res) => {
        if (res.ok) {
            console.log("Data saved successfully");
        } else {
            console.log("Failed to save data");
        }
    })
    .catch((err) => {
        console.error("Error:", err);
    });

// Display result details
const Result = () => {
    console.log(userData)
    document.querySelector(".r-name").innerHTML = ` ${username1} `;  
    document.querySelector(".r-time").innerHTML = ` ${time1} `;
    document.querySelector(".r-totalQ").innerHTML = ` ${totalQuestions}`;
    document.querySelector(".r-attempt").innerHTML = ` ${attempted}`;
    document.querySelector(".r-correct").innerHTML = ` ${score1}`;
    document.querySelector(".r-wrong").innerHTML = ` ${wrong}`;
    document.querySelector(".r-percentage").innerHTML = ` ${percentage}%`;
};

// Call Result to populate result details on the page
Result();
