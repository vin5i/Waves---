import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react';
import { generateChartValues, generateColorPalette, lightenColor, lightenRGBColor, parseRGB } from '../utils/fx';
import { TranslucentGeneratedChart } from './Chart';
import { SyncContext } from './SyncContext/SyncContext';

export default function IndigoComponent() {
	const { seed, background, shape, colorArray } = useContext(SyncContext);

	const [data, setData] = useState(generateChartValues(seed));

	const foreground = colorArray[0];
	const lighterForeground = lightenRGBColor(parseRGB(colorArray[0]), 50);

	useEffect(() => {
		setData(generateChartValues(seed));
	}, [seed]);

	return (
		<div
			id="image"
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${background})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}
			className={clsx(
				shape === 'circle' && 'rounded-full',
				shape === 'square' && 'rounded-sm',
				'h-[300px] w-[300px] overflow-hidden relative',
				'hover:border-white/20',
				'flex items-center justify-center',
				'p-12',
				'bg-cover bg-center bg-no-repeat'
			)}
		>
			<svg className="w-[200px] m-auto h-full absolute" viewBox="0 0 3410 3375" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M1705 27C778.239 27 27 770.335 27 1687.31C27 2604.29 778.239 3347.63 1705 3347.63C2631.76 3347.63 3383 2604.29 3383 1687.31C3383 770.335 2631.68 27 1705 27ZM1711.34 3083.6C930.285 3083.6 297.054 2457.1 297.054 1684.26C297.054 911.427 930.207 284.926 1711.34 284.926C2491.77 284.926 3124.53 910.409 3125.62 1682.38L2233.76 812.201V1102.6C2093.37 980.055 1909.01 905.714 1707.03 905.714C1510.46 905.714 1330.55 976.221 1191.65 1092.98V812.748L298.386 1684.26L1191.66 2555.78V2294.88C1330.56 2411.63 1510.46 2482.14 1707.03 2482.14C1909.01 2482.14 2093.3 2407.72 2233.76 2285.25V2555.31L3125.62 1685.12C3125.15 2457.49 2492.08 3083.6 1711.34 3083.6ZM2412.88 1328.29L2792.03 1698.19L2402.87 2077.88C2467.04 1964.26 2503.66 1833.34 2503.66 1693.89C2503.66 1561.95 2470.79 1437.53 2412.88 1328.29ZM2239.94 1690.37C2239.94 1981.86 2001.11 2218.19 1706.49 2218.19C1411.86 2218.19 1173.03 1981.86 1173.03 1690.37C1173.03 1398.87 1411.86 1162.54 1706.49 1162.54C2001.11 1162.54 2239.94 1398.87 2239.94 1690.37ZM998.994 2055.42L633.39 1698.66L989.368 1351.29C938.737 1454.9 910.409 1571.11 910.409 1693.89C910.409 1824.18 942.338 1947.12 998.994 2055.42Z"
					fill={colorArray[1]}
					stroke={colorArray[2]}
					stroke-width="53.2582"
					stroke-linecap="square"
				/>
			</svg>
			<TranslucentGeneratedChart data={data} colorArray={colorArray} />
		</div>
	);
}
