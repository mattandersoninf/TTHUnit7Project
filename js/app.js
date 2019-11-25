/* app.js */
/* WARNING: the chart object will not be recognized until the Chart script in the html file calls it*/


// traffic chart element
const trafficChart = document.getElementById('traffic-chart').getContext('2d');

// daily chart element
const dailyChart = document.getElementById('daily-chart').getContext('2d');

// mobile chart element
const mobileChart = document.getElementById('mobile-chart').getContext('2d');

// alert container and it's close button
const alertContainer = document.getElementsByClassName('alert-container')[0];
const closeAlertButton = alertContainer.getElementsByTagName('BUTTON')[0];

// send user message button
const sendUserButtonContainer = document.getElementsByClassName("message-input-container")[0]
const sendUserButton = sendUserButtonContainer.getElementsByTagName('BUTTON')[0];
const messageConfirm = document.getElementsByClassName("message-confirm")[0];

// form elements to modify default behavior for submissions
const messageForm = document.querySelector('form.message-user-container');
const settingsForm = document.querySelector('form.settings-container');

messageForm.addEventListener('submit', evt => {  evt.preventDefault() });
settingsForm.addEventListener('submit', evt => {  evt.preventDefault() });

const searchableUsers = ['Victoria Chambers','Dale Byrd', 'Dawn Wood', 'Dan Oliver', 'Josh Sullivan']

// alert bell
document.querySelector(".notification").addEventListener("click", function(){
    // overlay the alert with a menu
    document.getElementById("overlay").style.display = "block";
});

document.querySelector("#overlay").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
    document.querySelector(".notification").style.transform = "translate(0, 3px)";
});

// line chart buttons
hourlyLabel = document.querySelector("#hour");
dailyLabel = document.querySelector("#day");
weeklyLabel = document.querySelector("#week");
monthlyLabel = document.querySelector("#month");

hourlyLabel.addEventListener("click", function(){
    lineChart.data.datasets[0]["hidden"] = false;
    lineChart.data.datasets[1]["hidden"] = true;
    lineChart.data.datasets[2]["hidden"] = true;
    lineChart.data.datasets[3]["hidden"] = true;
    lineChart.update();
});

dailyLabel.addEventListener("click", function(){
    lineChart.data.datasets[0]["hidden"] = true;
    lineChart.data.datasets[1]["hidden"] = false;
    lineChart.data.datasets[2]["hidden"] = true;
    lineChart.data.datasets[3]["hidden"] = true;
    lineChart.update();
});

weeklyLabel.addEventListener("click", function(){
    lineChart.data.datasets[0]["hidden"] = true;
    lineChart.data.datasets[1]["hidden"] = true;
    lineChart.data.datasets[2]["hidden"] = false;
    lineChart.data.datasets[3]["hidden"] = true;
    lineChart.update();
});

monthlyLabel.addEventListener("click", function(){
    lineChart.data.datasets[0]["hidden"] = true;
    lineChart.data.datasets[1]["hidden"] = true;
    lineChart.data.datasets[2]["hidden"] = true;
    lineChart.data.datasets[3]["hidden"] = false;
    lineChart.update();
});

// on startup, give the setting inputs local storage values
function bodyOnLoad(){

    if (localStorage.getItem("email") == "true"){

        document.querySelector("#email").checked = true;
    }

    if (localStorage.getItem("public") == "true"){

        document.querySelector("#public").checked = true;

    }

}

let lineChart = new Chart(trafficChart, {
    type: 'line',
    data: {
        labels:['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
        datasets:[{
            label: 'Hourly',
            // straightens out the line
            lineTension: 0,
            borderColor: '#8A68AB',
            pointBackgroundColor: 'white',
            backgroundColor: '#d1b9f0',
            pointBorderWidth: 2,
            borderWidth: 1,
            fill: true,
            hidden: true,
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
        },
        {
            label: 'Daily',
            // straightens out the line
            lineTension: 0,
            borderColor: '#8A68AB',
            pointBackgroundColor: 'white',
            backgroundColor: '#d1b9f0',
            pointBorderWidth: 2,
            borderWidth: 1,
            fill: true,
            hidden: true,
            data:[
                '750',
                '250',
                '1000',
                '250',
                '750',
                '500',
                '750',
                '2500',
                '1500',
                '1000',
                '1500',
                '1000']
        },
        {
            label: 'Weekly',
            // straightens out the line
            lineTension: 0,
            borderColor: '#8A68AB',
            pointBackgroundColor: 'white',
            backgroundColor: '#d1b9f0',
            pointBorderWidth: 2,
            borderWidth: 1,
            fill: true,
            hidden: false,
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
        },
        {
            label: 'Monthly',
            // straightens out the line
            lineTension: 0,
            borderColor: '#8A68AB',
            pointBackgroundColor: 'white',
            backgroundColor: '#d1b9f0',
            pointBorderWidth: 2,
            borderWidth: 1,
            fill: true,
            hidden: true,
            data:[
                '1000',
                '750',
                '500',
                '250',
                '1750',
                '500',
                '500',
                '500',
                '250',
                '1000',
                '500',
                '750']
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


// send user button function
sendUserButton.addEventListener("click", function(){
    
    if (document.querySelector("#user-search").value == ''){
        if (messageConfirm.getAttribute("hidden") == null){
            messageConfirm.setAttribute("hidden",true);
        }
        document.querySelector(".user-fail").removeAttribute("hidden");
    }
    else{
        document.querySelector(".user-fail").setAttribute("hidden",true);
    }

    if (document.querySelector("#user-message").value == ''){
        if (messageConfirm.getAttribute("hidden") == null){
            messageConfirm.setAttribute("hidden",true);
        }

        document.querySelector(".message-fail").removeAttribute("hidden");
    }
    else{
        document.querySelector(".message-fail").setAttribute("hidden",true);
    }

    if ((document.querySelector("#user-search").value != '') && (document.querySelector("#user-message").value.length != '')){
        
        if (document.querySelector(".message-fail").getAttribute("hidden") == null){
            document.querySelector(".message-fail").setAttribute("hidden",true);
        }
        
        if (document.querySelector(".user-fail").getAttribute("hidden") == null){
            document.querySelector(".user-fail").setAttribute("hidden",true);
        }

        messageConfirm.removeAttribute("hidden");
    }

})

document.querySelector("#save").addEventListener("click", function(){

    localStorage.setItem("email", document.querySelector("#email").checked);

    localStorage.setItem("public", document.querySelector("#public").checked);

});

document.querySelector("#cancel").addEventListener("click", function(){

    localStorage.removeItem("email");

    localStorage.removeItem("public");

    document.querySelector("#email").checked = false;

    document.querySelector("#public").checked = false;

});

