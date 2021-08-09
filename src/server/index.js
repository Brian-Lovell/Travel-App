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


//API endpoints
geoAPIData = []
weatherbitData = []

// Get Route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Post route 
app.post('/submit', async function (req, res){
    const geonamesUser = process.env.GEONAMES_USERNAME
    let formLocation = req.body.text
    const fetchGeoURL = `http://api.geonames.org/searchJSON?q=${formLocation}&maxRows=1&username=${geonamesUser}`
    const geoRequestOptions = {
        method: 'POST',
        mode: 'cors',
        body:JSON.stringify(fetchGeoURL),
        redirect: 'follow'
    }

    let response = await fetch(fetchGeoURL, geoRequestOptions)
    let data = await response.json()
    console.log(data)

    geoAPIData.cityName = data.geonames[0].name
    geoAPIData.country = data.geonames[0].countryName
    geoAPIData.latitude = data.geonames[0].lat
    geoAPIData.longitude = data.geonames[0].lng
    console.log(geoAPIData)
    res.send(geoAPIData)

    .then( async (req, res) => {
        const weatherBitAPI = process.env.WEATHERBIT_API_KEY
        const weatherBitURL = `https://api.weatherbit.io/v2.0/current?lat=${geoAPIData.latitude}&lon=${geoAPIData.longitud}&key=${weatherBitAPI}/`
        const weatherBitOptions = {
            method: 'GET' ,
            mode: 'cors',
            redirect: 'follow'
        }

        let response = await fetch(weatherBitURL, weatherBitOptions)
        let data = await response.json()
        console.log(data)
        weatherbitData = data.body
        console.log(weatherbitData)
        res.send(weatherbitData)

    })

})