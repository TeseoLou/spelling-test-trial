const inputField = document.getElementById("input");
const fakeCursor = document.getElementById("fake-cursor");

// Function to hide the fake cursor when input is focused
inputField.addEventListener("focus", () => {
    fakeCursor.style.display = "none"; // Hide fake cursor
});

// Function to show the fake cursor when input loses focus (if empty)
inputField.addEventListener("blur", () => {
    if (inputField.value.trim() === "") {
        fakeCursor.style.display = "inline"; // Show fake cursor again if no text is entered
    }
});

// Ensure fake cursor is visible initially if the input is empty
document.addEventListener("DOMContentLoaded", () => {
    if (inputField.value !== "") {
        fakeCursor.style.display = "none"; // Hide cursor if input has text on page load
    }
});


