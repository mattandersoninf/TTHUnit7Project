/* app.js */
/* WARNING: the chart object will not be recognized until the Chart script in the html file calls it*/


// traffic chart element
const trafficChart = document.getElementById('traffic-chart').getContext('2d');

// daily chart element
const dailyChart = document.getElementById('daily-chart').getContext('2d');

// mobile chart element
const mobileChart = document.getElementById('mobile-chart').getContext('2d');

// alert container and it's close button
alertContainer = document.getElementsByClassName('alert-container')[0]
closeAlertButton = alertContainer.getElementsByTagName('BUTTON')[0]


let lineChart = new Chart(trafficChart, {
    type: 'line',
    data: {
        labels:['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
        datasets:[{
            label: 'Traffic',
            // straightens out the line
            lineTension: 0,
            borderColor: '#8A68AB',
            pointBackgroundColor: 'white',
            backgroundColor: '#d1b9f0',
            pointBorderWidth: 2,
            borderWidth: 1,
            fill: true,
            data:[
                '500',
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
    options:{
        legend:{
            display: false
        }
    }
});


let barChart = new Chart(dailyChart, {
    type: 'bar',
    data:{
        labels:['S','M','T','W','T','F','S'],
        datasets:[
            {
                backgroundColor: '#8A68AB',
                borderRadius: 2,
                data:[
                    '50',
                    '75',
                    '150',
                    '100',
                    '200',
                    '175',
                    '75']
            }
            ]
    },
    options:{
        legend:{
            display: false
        }
    }
});


let doughnutChart = new Chart(mobileChart, {
    type: 'doughnut',
    data:{
        labels:['Phones','Tablets','Desktop'],
        datasets:[{
            backgroundColor: ['#639ddb','#63db83','#8A68AB'],
            data:[
                '15',
                '15',
                '70'
                ]
        }]
    },
    options:{
        rotation: -2.2,
        legend:{
            display: true
        }
    }
});


// alert element function

closeAlertButton.addEventListener("click", function(){
    alertContainer.style.display = "none";
});




