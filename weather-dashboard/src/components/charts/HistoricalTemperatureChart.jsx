
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Brush
} from "recharts";

export default function HistoricalTemperatureChart({ data }) {

    if (!data?.daily || !data.daily.time) {
        return <p>No data available</p>;
    }

    const chartData = data.daily.time.map((t, i) => ({
        date: t,
        max: data.daily.temperature_2m_max?.[i] ?? 0,
        min: data.daily.temperature_2m_min?.[i] ?? 0,
    }));

    return (
        <div className="chart-box">
            <h5>Historical Temperature</h5>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />

                    <Line dataKey="max" stroke="red" />
                    <Line dataKey="min" stroke="blue" />
                    <Brush dataKey="date" height={30} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}