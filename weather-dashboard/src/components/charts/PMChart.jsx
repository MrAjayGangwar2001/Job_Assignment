// PMChart.jsx
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Brush,
    ResponsiveContainer,
} from "recharts";

const PMChart = ({ data }) => {
    const chartData = data.hourly.time.map((t, i) => ({
        time: t,
        pm10: data.hourly.pm10[i],
        pm25: data.hourly.pm2_5[i],
    }));

    return (
        <div className="chart-container">
            <ResponsiveContainer width={800} height={300}>
                <LineChart data={chartData}>
                    <XAxis dataKey="time" hide />
                    <YAxis />
                    <Tooltip />
                    <Line dataKey="pm10" />
                    <Line dataKey="pm25" />
                    <Brush dataKey="date" height={30} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PMChart;
