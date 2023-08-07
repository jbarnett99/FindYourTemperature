// Import the Express.js library and create an instance of the application.
import cors from "cors";
import fetch from "node-fetch";
import express from "express";

const app = express();

const corsOptions = {
    origin: '*',
    Credentials: true,
    optionSuccessStatus: 200,
}

const dotenv = require("dotenv");

dotenv.config();

// Replace "<your-api-key-here>" with your actual OpenWeatherMap API key

const { apiKey } = process.env;

/**
 * Builds the OpenWeatherMap API URL based on the provided zip code and API key.
 * @param {string} zipCode - The zip code for which weather data is requested.
 * @param {string} apiKey - The OpenWeatherMap API key.
 * @returns {string} - The constructed API URL.
 */
function buildBuiltInZipCodeRequest(zipCode, apiKey) {
    return `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`
}

// Middleware to parse incoming JSON data in the request body.
app.use(cors(corsOptions));
app.use(express.json());



// Route to handle GET requests at the root URL.
app.get("/", (req, res) => {
    res.status(200).send({ message: "Hello from the backend to the frontend!" });
});


// Route to handle POST requests at the "/books" URL.
app.post("/weather", (req, res) => {
    const cityName = req.body.cityName;
    console.log("cityName", cityName)
    // Add the book from the request body to the 'books' array.
    res.status(200).send(req.body);
});


function getCity() {
    if (weather) {

    }
    else {

    }


};

module.app();