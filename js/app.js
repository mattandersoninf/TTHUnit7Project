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

$(document).ready(function(){
    // grab the information from of the search input
    $("#user-search").on("keyup", function(){
        // grab the text that the user has typed
        //use toLowerCase so that it will still return the correct result if the user uses upper case
        let searchable = $(this).val().toLowerCase();
        /* 
        Toggle the visibility of the figures that have the photo-container class.
        If the searchable text matches part of the text within the figure, it will be visible, you won't see it otherwise.
        */
        $(".gallery .photo-container").filter(function(){
            $(this).toggle($(this).find('a').attr('title').toLowerCase().indexOf(searchable) > -1)
        });
    });
});


