// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437],4);
// Get data from cities.js
let cityData = cities;
//  Add a marker to the map for Los Angeles, California.
// An array containing each city's location, state, and population.

  // Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
   });
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius:city.population/100000
  })
  .bindPopup("<h2>"+ city.city + "," +city.state + "</h2><hr><h3>Population "+ city.population.toLocaleString() +"</h3>")
  .addTo(map);
});

  let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
    
//console.log(streets)
//console.log(streets);
//Them we add our 'streets' tile layer to the map.
streets.addTo(map);
