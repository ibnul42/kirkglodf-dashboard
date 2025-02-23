'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
    { day: 'Mon', temp: 22 },
    { day: 'Tue', temp: 18 },
    { day: 'Wed', temp: 20 },
    { day: 'Thu', temp: 24 },
    { day: 'Fri', temp: 27 },
    { day: 'Sat', temp: 23 },
    { day: 'Sun', temp: 19 }
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-lg">
                {payload[0].value}°C
            </div>
        );
    }
    return null;
};

export default function TemperatureChart() {
    return (
        <div className="flex flex-col items-start p-2 rounded-lg bg-white">
            <div className="opacity-70 text-sm">Air Conditioner</div>
            <ResponsiveContainer width={350} height={190}>
                <LineChart margin={{ top:20 }} data={data}>
                    <CartesianGrid strokeDasharray="1 1.5" stroke="#E0E0E0" />
                    <XAxis dataKey="day" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis
                        domain={[10, 30]}
                        tick={{ fontSize: 10 }}
                        tickLine={false}
                        tickFormatter={(value) => `${value}°C`}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    <Line
                        type="monotone"
                        dataKey="temp"
                        stroke="#00FF99"
                        strokeWidth={2}
                        dot={{ fill: '#00FF99', r: 4 }}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
