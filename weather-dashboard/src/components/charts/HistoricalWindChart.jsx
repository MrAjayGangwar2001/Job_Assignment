import {
    LineChart, Line, XAxis, YAxis, Tooltip,Brush, ResponsiveContainer
} from "recharts";

const HistoricalWindChart = ({ data }) => {
    if (!data?.daily) return null;

    const chartData = data.daily.time.map((t, i) => ({
        date: t,
        wind: data.daily.windspeed_10m_max[i],
    }));

    return (
        <div className="chart-box">
            <h5>Max Wind Speed</h5>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line dataKey="wind" />
                    <Brush dataKey="date" height={30} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default HistoricalWindChart;