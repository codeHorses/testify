// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Passed", "Delay", "Queue", "On-going"],
        datasets: [{
                data: [12.21, 15.58, 11.25, 8.32],
                backgroundColor: ['#03a9f4', '#ff5252', '#ffeb3b', '#8bc34a'],
            }],
    },
    options: {
        legend: {
            display: true,
            position: 'bottom'},
        title: {
            display: true,
            text: 'Another doughnut chart'
        }
    },
});
