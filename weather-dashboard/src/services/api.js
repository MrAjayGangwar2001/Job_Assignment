// src/services/api.js
import axios from "axios";

export const fetchWeather = async (lat, lon) => {
    const res = await axios.get("https://api.open-meteo.com/v1/forecast", {
        params: {
            latitude: lat,
            longitude: lon,

            hourly: [
                "temperature_2m",
                "relative_humidity_2m",
                "precipitation",
                "visibility",
                "windspeed_10m",
                "pm10",
                "pm2_5",
            ].join(","),

            daily: [
                "temperature_2m_max",
                "temperature_2m_min",
                "sunrise",
                "sunset",
                "precipitation_sum",
                "windspeed_10m_max",
            ].join(","),

            current_weather: true,
            timezone: "auto",
        },
    });

    return res.data;
};

// Historical API
export const fetchHistorical = async (lat, lon, start, end) => {
    const res = await axios.get("https://archive-api.open-meteo.com/v1/archive", {
        params: {
            latitude: lat,
            longitude: lon,
            start_date: start,
            end_date: end,

            daily: [
                "temperature_2m_max",
                "temperature_2m_min",
                "temperature_2m_mean",  // ✅ IMPORTANT
                "sunrise",              // ✅
                "sunset",               // ✅
                "precipitation_sum",    // ✅
                "windspeed_10m_max",    // ✅
                "winddirection_10m_dominant" // ✅ IMPORTANT
            ].join(","),

            timezone: "Asia/Kolkata", // ✅ IST fix
        },
    });

    return res.data;
};
