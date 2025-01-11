let fajrField = document.getElementById("fajr");
let sunriseField = document.getElementById("Sunrise");
let dhuhrField = document.getElementById("Dhuhr");
let asrField = document.getElementById("Asr");
let maghribField = document.getElementById("Maghrib");
let ishaField = document.getElementById("Isha");


function getPrayTime(city) {
    console.log("khawal")
    axios.get(
        `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=Egypt`
    ).then((response) => {
        return (response.data);
    }).then((json) => {
        let file = json.data.timings;
        fajrField.innerHTML = file.Fajr;
        sunriseField.innerHTML = file.Sunrise;
        dhuhrField.innerHTML = file.Dhuhr;
        asrField.innerHTML = (+file.Asr.split(":")[0] - 12 + ":" + file.Asr.split(":")[1]);
        maghribField.innerHTML = (+file.Maghrib.split(":")[0] - 12 + ":" + file.Maghrib.split(":")[1]);
        ishaField.innerHTML = (+file.Isha.split(":")[0] - 12 + ":" + file.Isha.split(":")[1]);
    })
}
getPrayTime(document.getElementById("mySelect").value);
document.getElementById("mySelect").onclick = () => {
    let city = document.getElementById("mySelect").value
    getPrayTime(city)
};

