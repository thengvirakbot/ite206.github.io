  if (!sessionStorage.getItem('userLoggedIn')) {
    window.location.href = 'index.html'; 
  }

  document.getElementById('logoutBtn').addEventListener('click', function() {
    sessionStorage.removeItem('userLoggedIn');
    
    window.location.href = 'index.html';
  });

  const data = {
    labels: ['Male', 'Female', 'Prefer Not to Mention'],
    datasets: [{
      data: [5000, 4500, 700], // Sample data
      backgroundColor: ['#4e73df', '#1cc88a', '#f6c23e'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#e5a700'],
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
    const ctx = document.getElementById('genderPieChart').getContext('2d');
    new Chart(ctx, config);
  };
