let lat = 40.650002
let long = -73.949997
let apiKey = "abb3e8d0e04a378350220116d5b23e56"
let weather = ""


function deleteBackground() {
    document.body.style.backgroundImage = "none"
}

function getWeather() {
    let weather = ""
    let linky = window.location.href.split("/")[3]
    function switchWeather() {
        if (typeof linky == "string" && linky != "") {
            switch(weather) {
                case "Fog":
                    document.body.style.backgroundImage= `url("/assets/images/fog.jpg")`
                    document.body.style.height = "100vh"
                    document.body.style.width = "100vw"
                    break;
                case "Clear":
                    document.body.style.background = `url("/assets/images/sun.jpeg")`
                    document.body.style.height = "100vh"
                    document.body.style.width = "100vw"
                    break;
                case "Rain":
                case "Drizzle":
                case "Mist":
                    document.body.style.background = `url("/assets/images/rain.jpeg")`
                    document.body.style.height = "100vh"
                    document.body.style.width = "100vw"
                    break;
                case "Thunderstorm":
                    document.body.style.background = `url("/assets/images/thunder.jpeg")`
                    document.body.style.height = "1000px"
                    document.body.style.width = "100vw"
                    break;
                case "Snow":
                    document.body.style.background = `url("/assets/images/snow.jpeg")`
                    document.body.style.height = "100vh"
                    document.body.style.width = "100vw"
                    break;
                case "Clouds":
                    document.body.style.background = `url("/assets/images/cloudy.jpeg")`
                    document.body.style.height = "100vh"
                    document.body.style.width = "100vw"
                    break;
            }
            console.log(weather)
        } else if (linky == "") {
            document.body.style.background = `url("/assets/images/blood_transparent.jpg")`
        }
    }

    return fetch("https://api.openweathermap.org/data/2.5/weather?lat=40.650002&lon=-73.949997&appid=abb3e8d0e04a378350220116d5b23e56")
        .then(res => res.json())
        .then(json => weather = json.weather[0].main)
        .then(function() {
            switchWeather()
        })

}

$(document).ready(function(){
    deleteBackground()
    getWeather()
})