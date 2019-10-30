/* app.js */

const trafficChart = document.getElementById('traffic-chart').getContext('2d');
let lineChart = new Chart(trafficChart, {
    type: 'line',
    data: {
        labels:['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
        datasets:[{
            label: 'Traffic',
            data:['500',
                  '1000',
                  '750',
                  '1250',
                  '1750',
                  '1250',
                  '1500',
                  '1000',
                  '1500',
                  '2000',
                  '1500',
                  '2000']
        }]
    },
    options:{}
});