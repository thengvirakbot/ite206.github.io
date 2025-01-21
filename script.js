function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var correctUsername = "student";
    var correctPassword = "password123";

    if (username === correctUsername && password === correctPassword) {

        sessionStorage.setItem("loggedInUser", username);

        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}