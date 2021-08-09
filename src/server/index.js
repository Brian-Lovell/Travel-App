//Requirments
const dotenv = require('dotenv')
dotenv.config()
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch')
const FormData= require('form-data')
const { send } = require('process')

// Start Express
const app = express()
const port = 2076

app.listen(port, function () {
    console.log(`Listening on port ${port}!`)
})

//Parse URL-encoded data with querystring library
app.use(bodyParser.urlencoded({ extended: false }))
//  Parse application/json
app.use(bodyParser.json())

// Enable All CORS Requests
app.use(cors())

//Initialize website
app.use(express.static('dist'))


//API endpoint
apiData = []

// Get Route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Post route 
app.post('/submit', async function (req, res){
    let formLocation = req.body.text
    let geoAPI = await fetchGeo(formLocation)
    let weatherAPI = await fetchWeather(apiData)
    let pixabayAPI = await fetchPixabay(apiData)
    console.log(apiData)
    res.send(apiData)
})

// Functions

async function fetchGeo(formLocation) {
    const geonamesUser = process.env.GEONAMES_USERNAME
    const fetchGeoURL = `http://api.geonames.org/searchJSON?q=${formLocation}&maxRows=1&username=${geonamesUser}`
    const geoRequestOptions = {
        method: 'POST',
        mode: 'cors',
        body:JSON.stringify(fetchGeoURL),
        redirect: 'follow'
    }

    let response = await fetch(fetchGeoURL, geoRequestOptions)
    let data = await response.json()
    // console.log(data)
    apiData.cityName = data.geonames[0].name
    apiData.country = data.geonames[0].countryName
    apiData.latitude = data.geonames[0].lat
    apiData.longitude = data.geonames[0].lng
    // console.log(apiData)

    return apiData
}

async function fetchWeather(apiData) {
    const weatherBitAPI = process.env.WEATHERBIT_API_KEY
    const weatherBitURL = `https://api.weatherbit.io/v2.0/current?lat=${apiData.latitude}&lon=${apiData.longitude}&key=${weatherBitAPI}`
    console.log(weatherBitURL)
    const weatherBitOptions = {
        method: 'GET' ,
        mode: 'cors',
        redirect: 'follow'
    }

    let response = await fetch(weatherBitURL, weatherBitOptions)
    let data = await response.json()
    console.log(data)
    apiData.weather = data.data[0].weather
    // console.log(apiData.weather)
    return apiData
}

async function fetchPixabay(apiData) {
    // fetch to pixabay
    const pixabayAPI = process.env.PIXABAY_API_KEY
    const category = "travel"
    const pixabayURL = `https://pixabay.com/api/?key=${pixabayAPI}&q=${apiData.cityName}&category=${category}`
    // console.log(pixabayURL)

    const pixabayOptions = {
        method: 'GET',
        mode: 'cors',
        redirect: 'follow'
    }

    let response = await fetch(pixabayURL, pixabayOptions)
    let data = await response.json()
    // console.log(data)
    apiData.picture = data.hits[0].webformatURL
    // console.log(apiData.picture)
    return apiData
}