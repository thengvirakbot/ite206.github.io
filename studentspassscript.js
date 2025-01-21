const data = {
    labels: ['Semester 1', 'Semester 2', 'Semester 3'],
    datasets: [{
        label: 'Pass Percentage (%)',
        data: [75, 79, 85],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
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
            },
            tooltip: {
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
        },
        y: {
            beginAtZero: true,
            max: 100
        }
    }
}
};

const passPercentageChart = new Chart(
    document.getElementById('passPercentageChart'),
    config
);