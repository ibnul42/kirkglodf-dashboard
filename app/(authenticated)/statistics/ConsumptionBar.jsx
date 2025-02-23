"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
    { name: "Mon", value: 200 },
    { name: "", value: 150 },
    { name: "Wed", value: 450 },
    { name: "", value: 300 },
    { name: "Fri", value: 200 },
    { name: "", value: 380 },
];

export default function ConsumptionBar() {
    return (
        <div className="shadow-[0_10px_88px_36px_rgba(2,106,56,0.05)] py-4 px-3 rounded-lg">
            <p className="opacity-70 text-sm">Consumption by Day</p>
            <div className="w-full h-40">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top:20 }}>
                        <XAxis
                            dataKey="name"
                            stroke="#fff"
                            tick={{ fill: "#888888", fontSize: 12 }}
                            tickLine={false}
                        />
                        <YAxis
                            domain={[0, 500]}
                            tickCount={6}
                            stroke="#888888"
                            tick={{ fill: "#888888", fontSize: 12 }}
                            axisLine={false}
                            tickMargin={10}
                            tickLine={false}
                        />

                        <CartesianGrid stroke="rgba(112, 112, 112, 0.3)" strokeDasharray="1 0" vertical={false} />

                        <Bar dataKey="value" fill="#31ED93" barSize={5} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
