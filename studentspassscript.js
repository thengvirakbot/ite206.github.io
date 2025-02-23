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
    labels: ['Semester 1', 'Semester 2', 'Semester 3'],
    datasets: [{
        label: 'Pass percentage (%)',
        data: [75, 79, 85],
        backgroundColor: 'rgba(255, 216, 20, 0.5)',
        borderColor: 'rgba(255, 216, 20, 0.7)', 
        borderWidth: 3,  
        labelColor: '#fff',  
    }]
};

const config = {
    type: 'bar',
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
                        return tooltipItem.raw + '%'; 
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.3)',  
                },
                ticks: {
                    color: '#fff',
                }
            },
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    color: 'rgba(255, 255, 255, 0.3)',  
                },
                ticks: {
                    color: '#fff', 
                }
            }
        },

    }
};

const passPercentageChart = new Chart(
    document.getElementById('passPercentageChart'),
    config
);
