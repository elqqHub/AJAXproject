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

  function showStations() {
    alert("HKI = Helsinki\nKLH = Kauklahti\nKE = Kerava\nKKN = Kirkkonummi\nSTI = Siuntio\nRI = Riihimäki")
  }