'use client';

import clsx from 'clsx';
import { useContext, useEffect, useState } from 'react';
import { generateChartValues } from '../utils/fx';
import { TranslucentGeneratedChart } from './Chart';
import { SyncContext } from './SyncContext/SyncContext';

export default function ChartSection() {
	// get the value from context
	const { seed, shape, colorArray } = useContext(SyncContext);

	const [data, setData] = useState(generateChartValues(seed));

	useEffect(() => {
		setData(generateChartValues(seed));
	}, [seed]); // Regenerate chart when seed changes

	return (
		<div
			id="image"
			className={clsx(
				shape === 'circle' && 'rounded-full',
				shape === 'square' && 'rounded-none',
				'bg-[#0e0e0e]',
				'h-[300px] w-[300px] overflow-hidden',
				'border-white/10',
				'hover:border-white/20',
				'flex items-center justify-center',
				'p-12'
			)}
		>
			<TranslucentGeneratedChart colorArray={colorArray} data={data} />
		</div>
	);
}
