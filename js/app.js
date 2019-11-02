/* app.js */
/* WARNING: the chart object will not be recognized until the Chart script in the html file calls it*/


// traffic chart element
const trafficChart = document.getElementById('traffic-chart').getContext('2d');

// daily chart element
const dailyChart = document.getElementById('daily-chart').getContext('2d');

// mobile chart element
const mobileChart = document.getElementById('mobile-chart').getContext('2d');


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


let barChart = new Chart(dailyChart, {
    type: 'bar',
    data:{
        labels:[],
        backgroundColor: #8a68ab,
        datasets:[{
            label: 'Daily Traffic',
            data:[
                '50',
                '75',
                '150',
                '100',
                '200',
                '175',
                '75']
        }]
    },
    options:{}
});


let circleChart = new Chart(mobileChart, {
    type: 'circle',
    data:{
        labels:[],
        backgroundColor: #8a68ab,
        datasets:[{
            label: 'Mobile Users',
            data:[
                '70',
                '15',
                '15'
                ]
        }]
    },
    options:{}
});