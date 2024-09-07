'use client';

import { useState, useEffect } from 'react';
import { Area, AreaChart } from 'recharts';
import { generateChartValues } from './utils/fx';
import useDeviceWidth from '@/hooks/useDeviceWidth';

export default function Home() {
	const [seed, setSeed] = useState('12988');
	const [data, setData] = useState(generateChartValues(seed));

	const width = useDeviceWidth();

	useEffect(() => {
		const interval = setInterval(() => {
			const newSeed = Math.floor(Math.random() * 10000).toString();
			setSeed(newSeed);
			setData(generateChartValues(newSeed));
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<main className="flex flex-col items-center justify-center min-h-screen p-24 overflow-hidden bg-black">
			<div>
				<div className="cursor-pointer">
					<AreaChart width={width} height={300} data={data} margin={{ top: 0, left: 0 }}>
						<defs>
							<linearGradient id="colorKv" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#dda15e" stopOpacity={0.3} />
								<stop offset="95%" stopColor="#dda15e" stopOpacity={0} />
							</linearGradient>
							<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.3} />
								<stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
							</linearGradient>
							<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#8884d8" stopOpacity={0.3} />
								<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
							</linearGradient>
							<linearGradient id="colorQv" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#f78c6c" stopOpacity={0.3} />
								<stop offset="95%" stopColor="#f78c6c" stopOpacity={0} />
							</linearGradient>
						</defs>
						<Area
							type="monotone"
							dataKey="uv"
							stroke="#8884d8"
							fillOpacity={0.5}
							animationBegin={0}
							animationDuration={3000}
							fill="url(#colorUv)"
						/>
						<Area
							type="monotone"
							dataKey="kv"
							stroke="#dda15e"
							fillOpacity={0.5}
							animationBegin={0}
							animationDuration={3000}
							fill="url(#colorKv)"
						/>
						<Area
							type="monotone"
							dataKey="pv"
							stroke="#82ca9d"
							fillOpacity={0.5}
							animationBegin={0}
							animationDuration={3000}
							fill="url(#colorPv)"
						/>
						<Area
							type="monotone"
							dataKey="qv"
							stroke="#f78c6c"
							fillOpacity={0.5}
							animationBegin={0}
							animationDuration={3000}
							fill="url(#colorQv)"
						/>
					</AreaChart>
				</div>
			</div>
		</main>
	);
}
