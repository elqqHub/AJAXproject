// Piilotetaan juna-asemien lyhenteet avaavan listan nappi, jotta sivun ulkoasu olisi vähän enemmän "smooth" käyttäjän tullessa sivulle
document.getElementById("infoButton").style.visibility = "hidden";

// Luodaan funktio, joka hakee dataa junista käytten Digitraffic API:tä
function getTrainData() {
    const station = document.getElementById("station").value;
    const url = `https://rata.digitraffic.fi/api/v1/live-trains?station=${station}`;
  
    // Noudetaan tiedot url constista, eli siis Digitrafficin API:ltä
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Valitaan, mitä tietoa junista tullaan käyttäjälle näyttämään (Junan numero, junan kateogoria, junatyyppi, määränpää sekä aika, jolloin juna lähtee asemalta)
        let trainData = "<table><tr><th>Train Number</th><th>Category</th><th>Type</th><th>Destination</th><th>Scheduled Time</th></tr>";
        data.forEach(train => {
          trainData += `<tr><td>${train.trainNumber}</td><td>${train.trainCategory}</td><td>${train.trainType}</td><td>${train.timeTableRows[0].stationShortCode}</td><td>${train.timeTableRows[0].scheduledTime.slice(11, 16)}</td></tr>`;
        });
        trainData += "</table>";
        document.getElementById("trainData").innerHTML = trainData;
        // Muutetaan piilossa oleva juna-asema listanappi näkyväksi, kun käyttäjä on suorittanut junatietojen haun
        document.getElementById("infoButton").style.visibility = "visible";
      })
  }

  // Luodaan "pudotusvalikko", josta voi tarkastella eri asemien lyhenteitä.
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

// Luodaan funktio, jonka avulla käyttäjä ohjataan junatyyppien wikipedia sivulle.
function openWiki() {
    window.open("https://fi.wikipedia.org/wiki/Luettelo_Suomen_junatyypeist%C3%A4"); 
}