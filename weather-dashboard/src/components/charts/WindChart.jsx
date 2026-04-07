// WindChart.jsx
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Brush,
    ResponsiveContainer,
} from "recharts";

const WindChart = ({ data }) => {
    const chartData = data.hourly.time.map((t, i) => ({
        time: t,
        wind: data.hourly.windspeed_10m[i],
    }));

    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                    <XAxis dataKey="time" hide />
                    <YAxis />
                    <Tooltip />
                    <Line dataKey="wind" />
                    <Brush dataKey="date" height={30} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default WindChart;