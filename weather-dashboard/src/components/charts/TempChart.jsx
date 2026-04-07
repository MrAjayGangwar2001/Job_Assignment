// src/components/charts/TempChart.jsx
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Brush,
    ResponsiveContainer,
} from "recharts";

const TempChart = ({ data }) => {
    const chartData = data.hourly.time.map((t, i) => ({
        time: t,
        temp: data.hourly.temperature_2m[i],
    }));

    return (
        <div style={{ width: "100%", overflowX: "scroll" }}>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                    <XAxis dataKey="time" hide />
                    <YAxis />
                    <Tooltip />
                    <Line dataKey="temp" />
                    <Brush dataKey="date" height={30} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TempChart;