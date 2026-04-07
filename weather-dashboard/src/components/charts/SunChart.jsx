import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Brush, Tooltip } from "recharts";

export default function SunChart({ data }) {

    if (!data?.daily || !data.daily.time) return null;

    const chartData = data.daily.time.map((t, i) => ({
        date: t,
        sunrise: new Date(data.daily.sunrise[i]).getHours(),
        sunset: new Date(data.daily.sunset[i]).getHours(),
    }));

    return (
        <div className="chart-box">
            <h5>Sunrise & Sunset (IST)</h5>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />

                    <Line dataKey="sunrise" stroke="orange" />
                    <Line dataKey="sunset" stroke="purple" />
                    <Brush dataKey="date" height={30} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}