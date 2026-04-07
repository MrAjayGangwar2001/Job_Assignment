// src/pages/CurrentWeather.jsx
import { useEffect, useState } from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Brush
} from "recharts";
import { getLocation } from "../utils/location";
import { fetchWeather } from "../services/api";
import TempChart from "../components/charts/TempChart";
import HumidityChart from "../components/charts/HumidityChart";
import PrecipitationChart from "../components/charts/PrecipitationChart";
import WindChart from "../components/charts/WindChart";
import PMChart from "../components/charts/PMChart";

const CurrentWeather = () => {
    const [data, setData] = useState(null);

    const [air, setAir] = useState(null);
    const [loading, setLoading] = useState(false);

    const lat = 28.6;
    const lon = 77.2;

    useEffect(() => {
        fetchWeather();
        fetchAirQuality();
    }, []);

    // 🌦️ WEATHER API
    const fetchWeather = async () => {
        setLoading(true);

        const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max&hourly=temperature_2m&timezone=Asia/Kolkata`
        );

        const result = await res.json();
        setData(result);
        setLoading(false);
    };

    // 🌫️ AIR QUALITY API
    const fetchAirQuality = async () => {
        const res = await fetch(
            `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&hourly=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide`
        );

        const result = await res.json();
        setAir(result);
    };

    if (loading) return <p>Loading...</p>;
    if (!data) return null;

    // 📊 Hourly Chart Data
    const hourlyData = data.hourly.time.map((t, i) => ({
        time: t.split("T")[1],
        temp: data.hourly.temperature_2m[i],
    }));

    return (
        <div className="container py-4">

            <h2 className="text-center mb-4">Current Weather</h2>

            {/* 🌡️ TEMPERATURE */}
            <div className="card p-3 mb-3">
                <h4>Temperature</h4>
                <p>Current: {data.current.temperature_2m}°C</p>
                <p>Min: {data.daily.temperature_2m_min[0]}°C</p>
                <p>Max: {data.daily.temperature_2m_max[0]}°C</p>
            </div>

            {/* 🌦️ ATMOSPHERIC */}
            <div className="card p-3 mb-3">
                <h4>Atmospheric Conditions</h4>
                <p>Humidity: {data.current.relative_humidity_2m}%</p>
                <p>Precipitation: {data.current.precipitation} mm</p>
                <p>UV Index: {data.daily.uv_index_max[0]}</p>
            </div>

            {/* 🌅 SUN */}
            <div className="card p-3 mb-3">
                <h4>Sun Cycle</h4>
                <p>Sunrise: {new Date(data.daily.sunrise[0]).toLocaleTimeString()}</p>
                <p>Sunset: {new Date(data.daily.sunset[0]).toLocaleTimeString()}</p>
            </div>

            {/* 🌬️ WIND */}
            <div className="card p-3 mb-3">
                <h4>Wind & Air</h4>
                <p>Wind Speed: {data.current.windspeed_10m} km/h</p>
                <p>Precipitation Probability: {data.daily.precipitation_probability_max[0]}%</p>
            </div>

            {/* 🌫️ AIR QUALITY */}
            {air && (
                <div className="card p-3 mb-3">
                    <h4>Air Quality</h4>
                    <p>PM10: {air.hourly.pm10[0]}</p>
                    <p>PM2.5: {air.hourly.pm2_5[0]}</p>
                    <p>CO: {air.hourly.carbon_monoxide[0]}</p>
                    <p>NO2: {air.hourly.nitrogen_dioxide[0]}</p>
                    <p>SO2: {air.hourly.sulphur_dioxide[0]}</p>
                </div>
            )}

            {/* 📈 HOURLY CHART */}
            <div className="card p-3">
                <h4>Hourly Temperature</h4>

                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={hourlyData}>
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Line dataKey="temp" stroke="orange" />

                        {/* 🔥 ZOOM FEATURE */}
                        <Brush dataKey="time" height={30} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default CurrentWeather;