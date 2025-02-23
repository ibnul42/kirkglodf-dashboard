'use client';

import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';

const data = [
    { name: 'Inner', value: 50, fill: '#4DA6FF' },
    { name: 'Middle', value: 70, fill: '#FF4D4D' },
    { name: 'Outer', value: 60, fill: '#00FF99' }
];

export default function MultiLayerGauge() {
    return (
        <div className="shadow-[0_10px_88px_36px_rgba(2,106,56,0.05)] py-4 px-3 rounded-lg">
            <p className="opacity-70 text-sm">AUX</p>
            <div className="flex flex-col items-center relative">
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                    <span className='text-2xl text-[#31ED93]'>70%</span>
                    <span className='text-xs opacity-60'>Overall</span>
                </div>
                <ResponsiveContainer width={190} height={190}>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="60%"
                        outerRadius="100%"
                        startAngle={90}
                        endAngle={-270}
                        barSize={5}
                        data={data}
                    >
                        <RadialBar dataKey="value" background={{ fill: '#F0F0F0' }} />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
