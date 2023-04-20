const apiUrl = "https://rata.digitraffic.fi/api/v1";
const stationsUrl = `${apiUrl}/metadata/stations`;

const stationSelect = document.getElementById("station");

fetch(stationsUrl)
    .then(response => response.json())
    .then(stations => {
        stations.forEach(station => {
            const option = document.createElement("option");
            option.value = station.stationShortCode;
            option.text = station.stationName;
            stationSelect.appendChild(option);
        });
    })
    .catch(error => console.error(error));

    function getTimetables() {
        const stationCode = document.getElementById("station").value;
        const timetablesUrl = `${apiUrl}/live-trains/station/${stationCode}`;

        fetch(timetablesUrl)
            .then(response => response.json())
            .then(timetables => {
                let timetableHtml = "<h2>Timetables</h2>";
                timetableHtml += "<ul>";
                timetables.forEach(timetable => {
                    timetableHtml += `<li>${timetable.trainNumber} - ${timetable.trainCategory} - ${timetable.trainType} - ${timetable.timeTableRows[0].scheduledTime}</li>`;
                });
                timetableHtml += "</ul>";
                document.getElementById("timetables").innerHTML = timetableHtml;
            })
            .catch(error => console.error(error));
    }