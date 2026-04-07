// src/components/charts/HumidityChart.jsx
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Brush,
    ResponsiveContainer,
} from "recharts";

const HumidityChart = ({ data }) => {
    const chartData = data.hourly.time.map((t, i) => ({
        time: t,
        humidity: data.hourly.relative_humidity_2m[i],
    }));

    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                    <XAxis dataKey="time" hide />
                    <YAxis />
                    <Tooltip />
                    <Line dataKey="humidity" />
                    <Brush dataKey="date" height={30} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default HumidityChart;