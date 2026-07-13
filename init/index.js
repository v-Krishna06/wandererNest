const mongoose = require("mongoose");
const axios = require("axios");
require("dotenv").config();

const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderernest";

main()
    .then(() => console.log("Connected"))
    .catch(console.log);

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});

    let listings = [];

    for (let obj of initData.data) {

        const location = `${obj.location}, ${obj.country}`;

        const response = await axios.get(
            "https://api.geoapify.com/v1/geocode/search",
            {
                params: {
                    text: location,
                    apiKey: process.env.GEOAPIFY_API_KEY,
                },
            }
        );

        const feature = response.data.features[0];

        listings.push({
            ...obj,
            owner: "6a4eadeef6e9f5512c12f6a0",

            geometry: {
                type: "Point",
                coordinates: [
                    feature.properties.lon,
                    feature.properties.lat,
                ],
            },
        });
    }

    await Listing.insertMany(listings);

    console.log("Database initialized successfully!");
};

initDB();