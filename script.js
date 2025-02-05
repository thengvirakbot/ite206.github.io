// Function to redirect to the dashboard after login
function redirectToDashboard(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Hardcoded credentials for validation
    const correctUsername = "student";
    const correctPassword = "password123";

    if (username === correctUsername && password === correctPassword) {
        // Store login status and username in sessionStorage
        sessionStorage.setItem("loggedInUser", username);
        sessionStorage.setItem("userLoggedIn", "true");

        // Redirect to the dashboard
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Add event listener to the form
document.querySelector('form').addEventListener('submit', redirectToDashboard);

// Slideshow interaction
const slideshow = document.querySelector('.slides');

// Pause animation on hover
slideshow.addEventListener('mouseenter', () => {
    slideshow.style.animationPlayState = 'paused';
});

// Resume animation on mouse leave
slideshow.addEventListener('mouseleave', () => {
    slideshow.style.animationPlayState = 'running';
});