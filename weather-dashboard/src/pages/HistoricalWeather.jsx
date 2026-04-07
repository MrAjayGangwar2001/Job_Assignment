import React, { useState } from "react";

import SunChart from "../components/charts/SunChart";

import HistoricalTemperatureChart from "../components/charts/HistoricalTemperatureChart";
import HistoricalPrecipitationChart from "../components/charts/HistoricalPrecipitationChart";
import HistoricalWindChart from "../components/charts/HistoricalWindChart";

// import PMChart from "./charts/PMChart";

function HistoricalWeather() {
    const [data, setData] = useState(null);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const fetchData = async () => {

        const lat = 28.6;
        const lon = 77.2;

        if (!startDate || !endDate) {
            alert("Select dates");
            return;
        }

        const diff =
            (new Date(endDate) - new Date(startDate)) /
            (1000 * 60 * 60 * 24);

        if (diff > 730) {
            alert("Max 2 years allowed");
            return;
        }

        try {

            setLoading(true);
            setError("");

            const res = await fetch(
                `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=Asia/Kolkata`
            );

            console.log("Button Clicked");

            const result = await res.json();
            console.log(result); // 👈 DEBUG
            setData(result);

        } catch (error) {
            setError("Failed to fetch data");
        } finally {
            setLoading(false);
        }


    };

    return (
        <div className="container py-4">

            <h2 className="text-center mb-4">Historical Weather</h2>


            {/* DATE RANGE */}
            <div className="d-flex gap-3 justify-content-center mb-4">
                <input type="date" onChange={(e) => setStartDate(e.target.value)} />
                <input type="date" onChange={(e) => setEndDate(e.target.value)} />

                <button className="btn btn-dark" onClick={fetchData}>

                    Get Data
                </button>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            </div>

            <div style={{ overflowX: "auto" }}>
                <div style={{ width: "1200px" }}>
                    {/* CHARTS */}
                    {data && (
                        <div className="chart-scroll">

                            <HistoricalTemperatureChart data={data} />
                            <SunChart data={data} />
                            <HistoricalPrecipitationChart data={data} />
                            <HistoricalWindChart data={data} />

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HistoricalWeather;