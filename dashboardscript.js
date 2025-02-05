// Check if user is logged in
if (!sessionStorage.getItem('userLoggedIn')) {
  window.location.href = 'index.html';
}

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', function () {
  sessionStorage.removeItem('userLoggedIn');
  window.location.href = 'index.html';
});