const path = require('path')
const express = require('express')
const hbs = require('hbs')
const locat = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
       
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})




app.get('/weather', (req , res) =>
{ 
if(!req.query.search) {  return  res.send('provide the adress u want to search') }
const adr=req.query.search
 locat(adr , (error ,{latitude , longitude , location}={})=>{ if(error) return res.send('bad search')
	 forecast(latitude, longitude, (error, data1) => {

    if(error) { return res.send('error')}
	res.send({ location:location  ,
    temperature:data1.temp ,
   date: data1.time	})  } ) } ) } )



app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'snehit',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})