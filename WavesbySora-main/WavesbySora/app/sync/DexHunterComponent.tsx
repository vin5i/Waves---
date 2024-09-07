import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react';
import { generateChartValues, lightenRGBColor, parseRGB } from '../utils/fx';
import { TranslucentGeneratedChart } from './Chart';
import { SyncContext } from './SyncContext/SyncContext';

export default function DexHunterComponent() {
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
				'h-[300px] w-[300px] relative overflow-hidden',
				'hover:border-white/20',
				'flex items-center justify-center',
				'p-12',
				'bg-cover bg-center bg-no-repeat'
			)}
		>
			<svg className="ml-8 w-[200px] h-full absolute m-auto" fill="none" viewBox="0 0 1376 1759" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M771.676 713.335c-30.367 81.455-104.201 123.38-137.322 134.16l34.998 37.743c84.831-35.961 141.704-11.458 159.536 5.289 19.197-81.797 86.796-71.169 118.197-55.63-64.621-67.019 34.744-77.02 92.505-73.644-109.957-85.367-224.425-67.515-267.914-47.918zM828.356 899.537c-81.654 40.305-166.287 24.018-198.397 10.837l-1.915 49.895c88.332 27.649 112.087 81.771 112.923 105.371 73.726-47.66 115.456 3.13 127.106 34.48 1.59-90.17 81.622-34.27 121.439 4.95-18.21-132.448-115.025-192.209-161.156-205.533z"
					fill={foreground}
				/>
				<path d="M82.032 658.735l98.498 218.573 199.53-103.905-229.292-160.597-68.736 45.929z" fill={lighterForeground} />
				<path d="M1279.17 1205.44c-92.95 358.96-363.876 186.85-464.861 237.53" stroke={lighterForeground} strokeWidth="46.185" />
				<path d="M1305.14 1099.99l-72.53 71.36 105.45 25.44-32.92-96.8z" fill={foreground} stroke={foreground} strokeWidth="46.185" />
				<path d="M271.07 732.397l-7.261-58.463 405.61 149.987-15.426 61.015L271.07 732.397z" fill={lighterForeground} />
				<path d="M302.292 80.859l359.174 259.016-247.888 313.542L54.405 394.4z" fill={lighterForeground} />
				<path
					d="M634.741 194.116l310.713 232.79-361.172 456.831L242.14 637.003l60.673-557.632s51.879 38.825 117.163 86.443c38.812 21.95 105.532 58.247 214.765 28.302z"
					fill={lighterForeground}
				/>
				<path
					d="M119.683 1000.77C231.59 822.227 242.084 692.301 233.342 649.657l558.131-49.745C554.537 998.274 662.071 1332.3 938.95 1408.51c205.15 56.47 299.44-127.68 320.85-169.49l.25-.5c0 160.38-200.86 327.32-378.648 350l-740.809-30.24c-17.153-27.54-32.375-57.08-45.21-88.03-10.97-26.44-10.18-77.38-16.28-88.57-.578-2.26-12.224 2.1-12.713 0-2.228-9.6-3.672-17.97-5.626-28.45-21.674-116.29-9.122-243.9 58.919-352.46z"
					fill={lighterForeground}
				/>
				<path
					d="M126.608 1705.31L86.555 1430.6l228.765 16.07-94.433 258.64h-94.279zM529.018 1743.14l-70.011-193.06 215.77-75.06-56.465 268.12h-89.294z"
					fill={lighterForeground}
				/>
				<path
					d="M500.906 1665.62c-134.173-333.82-15.097-936.351 44.028-1035.507 0 0-85.451 39.465-181.528 7.44-96.077-32.026-110.434-100.257-110.434-100.257-16 142.342-56.245 227.605-175.946 461.144-94.998 185.34-40.101 392.3 71.573 495.7 111.675 103.41 189.804 126.77 244.889 147.26 55.085 20.5 107.418 24.22 107.418 24.22zM633.17 1672.73l26.839-129.99c325.998 103.11 557.191-123.9 618.311-256.86-107.22 233.21-391.735 406.16-645.15 386.85z"
					fill={foreground}
				/>
				<path d="M329.6 992.318l242.593-37.357-66.203-211.766-209.534 173.649 33.144 75.474z" fill={lighterForeground} />
				<path d="M587.332 377.515s-13.129 8.757-49.865 2.188c-36.737-6.569-71.273-45.773-71.273-45.773" stroke={foreground} strokeWidth="34.178" />
			</svg>
			<TranslucentGeneratedChart data={data} colorArray={colorArray} />
		</div>
	);
}
