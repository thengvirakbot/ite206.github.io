if (!sessionStorage.getItem('userLoggedIn')) {
    window.location.href = 'index.html'; 
}

  document.getElementById('logoutBtn').addEventListener('click', function() {
    sessionStorage.removeItem('userLoggedIn');
    
    window.location.href = 'index.html';
  });

  const genderData = {
    labels: ['Male', 'Female', 'Prefer Not to Mention'],
    datasets: [{
      data: [900, 500, 100],
      backgroundColor: ['#4e73df', '#1cc88a', '#f6c23e'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#e5a700'],
      hoverBorderColor: 'rgba(234, 236, 244, 1)',
    }],
  };

  const statusData = {
    labels: ['Active Students', 'Dropouts', 'Graduated Students'],
    datasets: [{
      data: [1500, 700, 8000],
      backgroundColor: ['#36b9cc', '#f86c6b', '#1cc88a'],
      hoverBackgroundColor: ['#2a8fa7', '#e94c46', '#17a673'],
      hoverBorderColor: 'rgba(234, 236, 244, 1)',
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
        },
        tooltip: {
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
        },
        tooltip: {
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
