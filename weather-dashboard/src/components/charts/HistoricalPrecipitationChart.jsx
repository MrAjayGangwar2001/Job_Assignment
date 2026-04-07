import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Brush, ResponsiveContainer
} from "recharts";

const HistoricalPrecipitationChart = ({ data }) => {
    if (!data?.daily) return null;

    const chartData = data.daily.time.map((t, i) => ({
        date: t,
        rain: data.daily.precipitation_sum[i],
    }));

    return (
        <div className="chart-box">
            <h5>Precipitation</h5>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="rain" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default HistoricalPrecipitationChart;