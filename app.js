const request = require('request');
const url = 'https://api.darksky.net/forecast/33e9f738ea02a56b8d45c42df9a5603e/37.8267,-122.4233';

request({ url: url, json: true }, (err, res) => {
    if (err) {
        console.log('Unable to connect to weather service');
    } else if (res.body.error) {
        console.log('Unable to find the location');
    } else {
        const data = res.body.currently;
        console.log(`It's currently ${data.temperature} out. There is a ${data.precipProbability} chance of rain.`);
    }
});

const geocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaW1tYWQiLCJhIjoiY2p2b2I2ZWxzMXdrbzQwb2lxd3hpMzB0ciJ9.XIC2sL8uujq2jT7-HUzLGw&limit=1';

request({ url: geocodingUrl, json: true }, (err, res) => {
    if (err) {
        console.log('Unable to connect to weather service');
    } else if (res.body.message) {
        console.log(res.body.message);
    } else {
        const data = res.body.features[0];
        console.log(`Latitude: ${data.center[0]} and Longitude: ${data.center[1]}`);
    }
});