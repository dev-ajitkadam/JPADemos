// Parse URL parameters properly using URLSearchParams
const UrlParams = new URLSearchParams(window.location.search);
const name = UrlParams.get('username');
const number = UrlParams.get('number');
let data = []; 
let Category; 

// Handle category selection
document.querySelectorAll(".btn-category").forEach((option) => {
    option.disabled = false; 
    option.style.backgroundColor = ""; 
    option.style.color = "";

    // Add event listener to handle category selection
    option.addEventListener("click", () => {
        
        document.querySelectorAll(".btn-category").forEach((btn) => {
            btn.style.backgroundColor = "";
            btn.disabled = false;
            btn.style.color = "#FFFFFF";
        });

        if (option) {
            option.style.backgroundColor = "#0ad0f4";
            Category = option.innerHTML.trim(); 
        }

        
        document.querySelectorAll(".btn-category").forEach((btn) => {
            if (btn !== option) {
                btn.disabled = true;
            }
        });
    });
});

// Fetch user history and display it in the table
async function GetHistory() {
    try {
        const res = await fetch(`http://localhost:8080/getUserHistory?num=${number}`, {
            method: "GET",
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        data = await res.json(); // Store fetched data
        console.log("Fetched Data Inside Function:", data); // Verify the data inside the function

        // Populate the table with data
        const tableBody = document.querySelector(".data-show");
        tableBody.innerHTML = ""; 

        data.forEach((entry, index) => {
            const row = `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${entry.name}</td>
                    <td>${entry.number}</td>
                    <td>${entry.totakTimeTaken}s</td>
                    <td>${entry.attemptedQ}</td>
                    <td>${entry.correctA}</td>
                    <td>${entry.persentage}.00%</td>
                </tr>
            `;
            tableBody.insertAdjacentHTML("beforeend", row); 
        });
    } catch (err) {
        console.error("Error:", err);
    }
}

GetHistory(); 

// Logic for clicking the 'enter-btn' to validate the selection and redirect
document.querySelector(".enter-btn").addEventListener("click", () => {
    if (!Category) { 
        alert("Please select a Category");
    } else {
        window.location.href = `quizPage.html?username=${name}&number=${number}&Category=${Category}`;
        loadQuestion(); 
    }
});


function loadQuestion() {
    console.log("Questions are being loaded...");
}
