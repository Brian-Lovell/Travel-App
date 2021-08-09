import { checkForName } from './nameChecker'

function handleSubmit(event) {
    event.preventDefault()

    // Check what was entered into text field
    let formDate = document.getElementById('tripDate').value
    let formLocation = document.getElementById('location').value
    console.log(formDate)
    console.log(formLocation)

    fetch('http://localhost:2076/submit', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: formLocation})
    })

    .then (res => res.json())
    .then (res => {
        document.getElementById('resultsDate').innerHTML = res.date
        document.getElementById('resultsCityName').innerHTML = res.cityName
        document.getElementById('resultsCountryName').innerHTML = res.country
        document.getElementById('resultsForecast').innerHTML = res.weather
        document.getElementById('resultsImage').innerHTML = res.picture
    })
}

export { handleSubmit }