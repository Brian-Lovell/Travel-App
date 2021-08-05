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
geoAPIData = []

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

})


// app.post('/analyze', async function (req, res) {
//     const apiURL = 'https://api.meaningcloud.com/sentiment-2.1'
//     const formdata = new FormData()

//     formdata.append("key", process.env.API_KEY)
//     // formdata.append("txt", "")
//     formdata.append("lang", "en")
//     formdata.append("of","json")
//     formText = req.body.url
//     formdata.append("url", formText)

//     const requestOptions = {
//         method: 'POST',
//         mode: 'cors',
//         body: formdata,
//         redirect: 'follow'
//     }

//     let response = await fetch(apiURL, requestOptions)
//     let data = await response.json()

//     apiData.score = data.score_tag
//     apiData.agreement = data.agreement
//     apiData.subjectivity = data.subjectivity
//     apiData.confidence = data.confidence
//     apiData.irony = data.irony
//     res.send(apiData)
//     console.log(apiData)
// })