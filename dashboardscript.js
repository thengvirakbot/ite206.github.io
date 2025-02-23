// Check if user is logged in
if (!sessionStorage.getItem('userLoggedIn')) {
  window.location.href = 'index.html';
}

// Logout functionality
document.addEventListener("DOMContentLoaded", function () {
    const profilePic = document.getElementById("profilePic");
    const logoutDropdown = document.getElementById("logoutDropdown");

    profilePic.addEventListener("click", function () {
        logoutDropdown.style.display = logoutDropdown.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
        if (!profilePic.contains(event.target) && !logoutDropdown.contains(event.target)) {
            logoutDropdown.style.display = "none";
        }
    });

    document.getElementById("logoutBtn").addEventListener("click", function () {
        window.location.href = "index.html";
    });
});
