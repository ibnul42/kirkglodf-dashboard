'use client';

import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

const data = [{ name: 'Temperature', value: 28, fill: '#00FF99' }];

export default function TemperatureGauge() {
    return (
        <div className="shadow-[0_10px_88px_36px_rgba(2,106,56,0.05)] py-4 rounded-lg">
                <p className="opacity-70 text-sm px-3">Device limit</p>
            <div className="flex flex-col items-center">
                <div className="relative">
                    <ResponsiveContainer width={165} height={165}>
                        <RadialBarChart
                            cx="50%"
                            cy="50%"
                            innerRadius="80%"
                            outerRadius="100%"
                            startAngle={220}
                            endAngle={-40}
                            barSize={5}
                            data={data}
                        >
                            <PolarAngleAxis type="number" domain={[21, 38]} angleAxisId={0} tick={false} />
                            <RadialBar minAngle={15} clockWise dataKey="value" fill="#00FF99" background={{ fill: '#E0E0E0', strokeWidth: 1 }} />
                        </RadialBarChart>
                    </ResponsiveContainer>
                    <div className="absolute left-0 top-[75px] flex justify-center w-full">
                        <p className='text-[#31ED93] text-3xl'>21°C</p>
                    </div>
                    <div className="absolute left-0 top-0 flex items-end w-full h-full">
                        <div className="-ml-4 flex justify-between items-center w-full gap-3 px-4 text-xs text-gray-400">
                            <span className='text-sm'>21°C</span>
                            <span className='text-[#31ED93] text-xs'>Temperature</span>
                            <span className='text-sm'>38°C</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
