// 🌟 Exercise 1 : Location — analyze the code. What will be the output?
// Write your prediction first, then run: node exercise1.js

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// My prediction: "I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)"
// name comes from person.name; location: {...} goes inside person.location;
// coordinates: [lat, lng] takes the 2 values of the array by position.
