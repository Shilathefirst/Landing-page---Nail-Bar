const typingTextElement = document.getElementById("typing-text");
const textToType = "Welcome to MrsDitshNails";
let index = 0;

function typeText() {
    if (index < textToType.length) {
        typingTextElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 100); // Adjust typing speed (in milliseconds) here
    }
}

// Start typing animation when page loads
window.onload = typeText;


