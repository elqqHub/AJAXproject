// Function to get train data from Digitraffic API
function getTrainData() {
    const station = document.getElementById("station").value;
    const url = `https://rata.digitraffic.fi/api/v1/live-trains?station=${station}`;
  
    // Make a GET request to the API endpoint
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Display the train data on the webpage
        let trainData = "<table><tr><th>Train Number</th><th>Category</th><th>Type</th><th>Destination</th><th>Scheduled Time</th></tr>";
        data.forEach(train => {
          trainData += `<tr><td>${train.trainNumber}</td><td>${train.trainCategory}</td><td>${train.trainType}</td><td>${train.timeTableRows[0].stationShortCode}</td><td>${train.timeTableRows[0].scheduledTime.slice(11, 16)}</td></tr>`;
        });
        trainData += "</table>";
        document.getElementById("trainData").innerHTML = trainData;
      })
      .catch(error => console.log(error));
  }

  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function openWiki() {
    window.open("https://fi.wikipedia.org/wiki/Luettelo_Suomen_junatyypeist%C3%A4"); 
}