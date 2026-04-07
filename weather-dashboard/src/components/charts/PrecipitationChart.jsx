// PrecipitationChart.jsx
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const PrecipitationChart = ({ data }) => {
    const chartData = data.hourly.time.map((t, i) => ({
        time: t,
        rain: data.hourly.precipitation[i],
    }));

    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                    <XAxis dataKey="time" hide />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="rain" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PrecipitationChart;