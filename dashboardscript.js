if (!sessionStorage.getItem('userLoggedIn')) {
    window.location.href = 'index.html'; 
}

document.getElementById('logoutBtn').addEventListener('click', function() {
    sessionStorage.removeItem('userLoggedIn');
    
    window.location.href = 'index.html';
});