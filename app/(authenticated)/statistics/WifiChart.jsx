'use client';
import {
    ComposedChart,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Bar,
} from 'recharts';

const data = [
    { name: 'M', value: 150 },
    { name: '', value: 450 }, 
    { name: 'W', value: 100 },
    { name: '', value: 150 }, 
    { name: 'F', value: 450 },
    { name: '', value: 700 },
    { name: 'S', value: 250 },
];

export default function WifiChart() {
    return (
        <div className="shadow-[0_10px_88px_36px_rgba(2,106,56,0.05)] py-4 px-3 rounded-lg">
            <p className="opacity-70 text-sm">Wifi</p>
            <div className="w-full">
                <ResponsiveContainer width={250} height={190}>
                    <ComposedChart margin={{ top:20 }} layout="vertical" data={data}>
                        {/* Ensure no extra lines */}
                        <CartesianGrid stroke="#E5E5E5" vertical={false} horizontal={false} />

                        {/* X-Axis */}
                        <XAxis
                            type="number"
                            stroke="#A0A0A0"
                            tick={{ fill: "#A0A0A0", fontSize: 12 }}
                            domain={[50, 1000]}
                            ticks={[50, 200, 500, 1000]}
                            tickFormatter={(tick) => {
                                if (tick === 1000) return "1TB";
                                if (tick === 500) return "500GB";
                                if (tick === 200) return "200GB";
                                if (tick === 50) return "50GB";
                                return tick;
                            }}
                            tickLine={false}
                            axisLine={false}
                        />

                        {/* Y-Axis (Forcing all labels to show) */}
                        <YAxis
                            dataKey="name"
                            type="category"
                            stroke="#A0A0A0"
                            tick={{ fill: "#A0A0A0", fontSize: 14 }}
                            axisLine={false}
                            tickLine={false}
                            interval={0} // Force showing all Y-axis labels
                        />

                        {/* Bars */}
                        <Bar
                            dataKey="value"
                            fill="#32F7A1"
                            barSize={5}
                            radius={[10, 10, 10, 10]}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
