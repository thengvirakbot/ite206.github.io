if (!sessionStorage.getItem('userLoggedIn')) {
    window.location.href = 'index.html'; 
}

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

const data = {
    labels: ['Male', 'Female', 'Prefer not to mention'],
    datasets: [{
        data: [5000, 4500, 700],
        backgroundColor: ['#FF4C4C', '#FFD700', '#8A2BE2'],
        hoverBackgroundColor: ['#FF0000', '#FF8C00', '#9932CC'],
        hoverBorderColor: 'rgba(234, 236, 244, 1)',
    }],
};

const config = {
    type: 'pie',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 12,
                        weight: 'normal',
                        family: 'Arial',
                    },
                    color: '#fff',
                }
            },
            tooltip: {
                backgroundColor: '#333',
                titleColor: '#fff',
                bodyColor: '#fff',
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        }
    },
};

window.onload = function() {
    const ctx = document.getElementById('genderPieChart').getContext('2d');
    new Chart(ctx, config);
};
