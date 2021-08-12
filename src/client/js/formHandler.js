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
        console.log(res)
        // Add countdown
        let countDownDate = new Date(formDate).getTime()
        let x = setInterval(function() {
            let now = new Date().getTime()

            let distance = countDownDate - now

            let days = Math.floor(distance / (1000 * 60 * 60 *24))

            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))

            let seconds = Math.floor((distance % (1000 * 60)) / 1000)

            document.getElementById("countdown").innerHTML = days + "d" + hours + "h " + minutes + "m " + seconds + "s "

            if (distance < 0) {
                clearInterval(x)
                document.getElementById("countdown").innerHTML = "Today is the day!"
            }
        }, 1000)

        // Add travel location image
        const img = document.getElementById('resultsImage')
        img.src = res.picture
        img.alt = res.cityName

        // Add weather icon image
        const weatherImg = document.getElementById('currentWeatherIcon')
        const iconCode = res.weather['icon']
        const fileExt = ".png"
        const weatherBitIconURL = "https://www.weatherbit.io/static/img/icons/"
        const weatherIconImagePath = weatherBitIconURL + iconCode + fileExt
        weatherImg.src = weatherIconImagePath
        weatherImg.alt = res.weather['description']

        // Add results
        document.getElementById('resultsDate').innerHTML = formDate
        document.getElementById('resultsCityName').innerHTML = res.cityName
        document.getElementById('resultsCountryName').innerHTML = res.country
        document.getElementById('currentWeatherDescription').innerHTML = res.weather['description']
    })
}

export { handleSubmit }