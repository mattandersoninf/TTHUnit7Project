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
    $("#search").on("keyup", function(){
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


function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }