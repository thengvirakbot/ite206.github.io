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

const genderData = {
    labels: ['Male', 'Female', 'Prefer not to mention'],
    datasets: [{
        data: [900, 500, 100],
        backgroundColor: ['#FF5733', '#FFC300', '#DAF7A6'], // Striking and vibrant colors
        hoverBackgroundColor: ['#C70039', '#FF6F00', '#82E0AA'], // Bold hover colors
        hoverBorderColor: 'rgba(234, 236, 244, 1)', // Light border color
    }],
};

const statusData = {
    labels: ['Active students', 'Dropouts', 'Graduated students'],
    datasets: [{
        data: [1500, 700, 8000],
        backgroundColor: ['#FF6347', '#FF4500', '#32CD32'], // High-contrast and vibrant colors
        hoverBackgroundColor: ['#FF5733', '#E03C31', '#228B22'], // Bold hover colors
        hoverBorderColor: 'rgba(234, 236, 244, 1)', // Light border color
    }],
};

const genderConfig = {
    type: 'doughnut',
    data: genderData,
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
                    color: '#FFFFFF',
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

const statusConfig = {
    type: 'doughnut',
    data: statusData,
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
                    color: '#FFFFFF', // White text for better readability
                }
            },
            tooltip: {
                backgroundColor: '#333', // Dark background for tooltips
                titleColor: '#fff', // White title color
                bodyColor: '#fff', // White body color for tooltips
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
    const genderCtx = document.getElementById('genderDonutChart').getContext('2d');
    new Chart(genderCtx, genderConfig);

    const statusCtx = document.getElementById('statusDonutChart').getContext('2d');
    new Chart(statusCtx, statusConfig);
};
