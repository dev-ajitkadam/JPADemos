// Hompage JS
// Navigation for homepage to quiz-page
let name;
let number;

// Enter button logic
document.querySelector('.next-btn').addEventListener('click', (btn) => {
    name = document.getElementById("username").value.trim();
    number = document.getElementById("number").value.trim();

    // Fix the validation condition
    if (!name || !number) {
        alert("Please Enter User Name and Category");
    } else {
        // Redirect to the next page with query string properly formatted
        window.location.href = `category.html?username=${name}&number=${number}`;
    }
});
