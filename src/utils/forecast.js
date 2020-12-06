const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=' + latitude + ',' + longitude + '&units=m'

    request({ url: url, json: true }, (error, response) => {
        if (error) 
            callback('Unable to connect to weather service!', undefined)
         else if (response.body.error) 
            callback('Unable to find location', undefined)
       else 
           callback(undefined, { time: response.body.location.localtime ,  temp:response.body.current.temperature })
        
    })
}



module.exports = forecast 