import { Area, AreaChart } from 'recharts';

const GeneratedChart = ({ data }: { data: any }) => {
	return (
		<div className="cursor-pointer">
			<AreaChart width={1000} height={300} data={data} margin={{ top: 0, left: 0 }}>
				<defs>
					<linearGradient id="colorKv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#dda15e" stopOpacity={0.8} />
						<stop offset="95%" stopColor="#dda15e" stopOpacity={0} />
					</linearGradient>
					<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
						<stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
					</linearGradient>
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
						<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
					</linearGradient>
					<linearGradient id="colorQv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#f78c6c" stopOpacity={0.8} />
						<stop offset="95%" stopColor="#f78c6c" stopOpacity={0} />
					</linearGradient>
				</defs>
				<Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} animationBegin={0} animationDuration={3000} fill="url(#colorUv)" />
				<Area type="monotone" dataKey="kv" stroke="#dda15e" fillOpacity={1} animationBegin={0} animationDuration={3000} fill="url(#colorKv)" />
				<Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} animationBegin={0} animationDuration={3000} fill="url(#colorPv)" />
				<Area type="monotone" dataKey="qv" stroke="#f78c6c" fillOpacity={1} animationBegin={0} animationDuration={3000} fill="url(#colorQv)" />
			</AreaChart>
		</div>
	);
};

const TranslucentGeneratedChart = ({ data, colorArray }: { data: any; colorArray: any }) => {
	return (
		<div className="cursor-pointer">
			<AreaChart width={1000} height={300} data={data} margin={{ top: 0, left: 0 }}>
				<defs>
					<linearGradient id="colorKv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor={colorArray[1]} stopOpacity={0.4} />
						<stop offset="95%" stopColor={colorArray[1]} stopOpacity={0} />
					</linearGradient>
					<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor={colorArray[2]} stopOpacity={0.4} />
						<stop offset="95%" stopColor={colorArray[2]} stopOpacity={0} />
					</linearGradient>
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor={colorArray[3]} stopOpacity={0.4} />
						<stop offset="95%" stopColor={colorArray[3]} stopOpacity={0} />
					</linearGradient>
					<linearGradient id="colorQv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor={colorArray[4]} stopOpacity={0.4} />
						<stop offset="95%" stopColor={colorArray[4]} stopOpacity={0} />
					</linearGradient>
				</defs>
				<Area type="monotone" dataKey="uv" stroke={colorArray[3]} fillOpacity={1} animationBegin={0} animationDuration={3000} fill="url(#colorUv)" />
				<Area type="monotone" dataKey="kv" stroke={colorArray[1]} fillOpacity={1} animationBegin={0} animationDuration={3000} fill="url(#colorKv)" />
				<Area type="monotone" dataKey="pv" stroke={colorArray[2]} fillOpacity={1} animationBegin={0} animationDuration={3000} fill="url(#colorPv)" />
				<Area type="monotone" dataKey="qv" stroke={colorArray[4]} fillOpacity={1} animationBegin={0} animationDuration={3000} fill="url(#colorQv)" />
			</AreaChart>
		</div>
	);
};

export { GeneratedChart, TranslucentGeneratedChart };
