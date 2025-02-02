import clsx from 'clsx';
import { useContext, useEffect, useState } from 'react';
import { generateChartValues, generateColorPalette } from '../utils/fx';
import { TranslucentGeneratedChart } from './Chart';
import { SyncContext } from './SyncContext/SyncContext';

export default function NemoniumComponent() {
	const { seed, shape, background, colorArray } = useContext(SyncContext);

	const [data, setData] = useState(generateChartValues(seed));

	useEffect(() => {
		setData(generateChartValues(seed));
	}, [seed]);

	return (
		<div className="flex flex-col items-center">
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
					'relative',
					'bg-cover bg-center bg-no-repeat'
				)}
			>
				<svg className="w-[200px] h-full absolute m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129.87 140.19">
					<g>
						<g>
							<path
								fill={colorArray[0]}
								d="M129.85,68.21a67.28,67.28,0,0,0-21.29-50.76,6.17,6.17,0,0,1-3.45-.09c-4.67-1.26-2.66,17.39-9.5,11.89s-12.1,1.32-15.54,2S78.89,30.35,82,29s-3.3-7.27-5.9-3.52-10.61-2.43-14.13-2.87-9.25-7.7-5-8.36,1.3-6.17,1.52-7.71S54.35,4.2,55.62,0A62.92,62.92,0,0,0,18.17,17.85s5.45,4.57,3.69,5.23-2.9,3.31-1.67,3.75,8.72,2,12,6.82-.22,9.25,0,12.77,2.2,6.17,6.39,6.83S46,56.15,45,57.76c-.88,1.43-2.86.11-5.94-1.87s-5.51.66-7,2.64-4.4,2.14-8.81,1.84-8.8,6.07-7.26,9.49,5.28,3.43,4.18,6.07.85,5.82,1.6,6.63C23.93,85,30,90.17,33,89.66c4.13-.68,5.7,1.49,7.68.74,1.82-.68,2-8.29,2.47-9.9.67-2.23.75-3.8,2.81-5.29,1.06-.76.72.79.63,2.09-.12,1.68-.71,3.33-.36,4.68.28,1.11.39,4.67,1.21,7.48.9,3.07-1.47,7.31-3.87,7.47-3.86.25-7.85,4-9.33.9-.89-1.85-5.46.8-8.51-1.56C23,94.18,16.36,82.2,13.94,82.09,10.81,82,7.6,72.62,5.81,72.62S3.55,64.34,0,63.91A67.82,67.82,0,0,0,9.26,99c6.09,10.53,15,17.56,23.57,22.21,2.74-2.22,5.88-4.51,5.88-6,0-2,1.65-2,2.47-2s3.47,1,3.14,2.48,6.11,1.16,6.94-1,3-3.8,2.31-1.49-3.47,5-3,6.44,2.64,4.13.16,5.29a3.73,3.73,0,0,0-2.1,2.69,70.74,70.74,0,0,0,9.75,2.13c4.45.58,5.8,2.84,6.19,4.32a1.83,1.83,0,0,0,1.71,1.38c1.54,0,4,.11,6,.32a16.61,16.61,0,0,0,2.59,0h0c1.27-.26,1.93-2.9,2-3.56,0-.25.12-.35.18-.28s.13.68-.18,1.75-.84,1.61-.69,1.94c.06.13.21.26.55.43h0a11,11,0,0,1,1.86,1l.27.17h0c.76.37.73-.61,1-.61h0s0,0,0,0h0c0,.19-.54.88,0,1.15,2.38,1.09,4.16.69,6.89.59a5.06,5.06,0,0,1,3.38,1,3.63,3.63,0,0,0,3.22.58l2.07-.6h0c1.52-.42,1.72-4.24,1.54-5.1a.86.86,0,0,1,0-.22.5.5,0,0,1,0-.19.31.31,0,0,1,.17-.21c.13-.05.29.12.34.63a3,3,0,0,1,0,.49c0,.29-.11.64-.19,1,0,.13,0,.25-.08.38s-.1.51-.13.76a4.6,4.6,0,0,0-.07.71c0,.68.12,1.2.66,1.27h0l-.07,0a3.88,3.88,0,0,1,.59,0l1.16.18a3.67,3.67,0,0,0,2.85-.75l2.75-2.17h0c.26-.21.3-.95.3-1.6,0-.11,0-.21,0-.31v-.28c0-.55.16-1.09.27-1s0,.05.06.11,0,.09,0,.16a9.57,9.57,0,0,0,.13,2.06.19.19,0,0,0,.11.12h0a.21.21,0,0,0,.17-.06h0l.94-.74a3.69,3.69,0,0,0,1.38-3.22c-.35-4.12-1.44-9.91,4.87-11.42,7.46-1.78,4.57-6.46,8-9.47s2.23-6.13,1.67-12.71,5.46-11.37,5.35-13.26S129.63,78.47,129.85,68.21ZM67.38,36.85c-.22-2.37-1-3.75-2.45-4.3s-2.66-3.74-.85-3,2.48,1.93,4.46,2.76a5.88,5.88,0,0,0,4.18.27c1.32-.56,2.87-1.37.55,1.21S71.4,37.62,73,38.39s.11,3.08-.55,2.42S71,39.65,70.63,40,67.6,39.21,67.38,36.85Zm34.16,60a10.86,10.86,0,0,1-1.17,4A11.35,11.35,0,0,1,94.63,106c-.33.14-.66.3-1,.47-3.89,2-7.13,5.18-12.55,5.31h0a17,17,0,0,1-4.48-.54c-3.22-.81-5-2.22-5.87-3.82a4.11,4.11,0,0,1-.21-.42c0-.12-.09-.23-.14-.34s-.13-.4-.18-.6-.09-.4-.12-.6a7.38,7.38,0,0,1,.11-2.53,9.32,9.32,0,0,1,1.5-3.4c1.9-2.56-1.89-4.12.89-6.57.21-.18.44-.36.69-.55a19.07,19.07,0,0,1,3-1.75l1.08-.48a34.54,34.54,0,0,1,5.23-1.71,38.35,38.35,0,0,1,6.45-1,36.9,36.9,0,0,1,4.82,0,10,10,0,0,1,1.28.15A8.48,8.48,0,0,1,97,88.2l.59.28a6.93,6.93,0,0,1,2,1.5,7.5,7.5,0,0,1,1.32,2.15A10.58,10.58,0,0,1,101.54,96.86Zm20.13,2.49c0,.32,0,.64,0,1,0,.8.09,1.51.1,2.14.06,4.44-1,5.09-3,5a4.58,4.58,0,0,1-2.86-1.37,4.81,4.81,0,0,1-1.23-2,4.24,4.24,0,0,1-.18-1.17,3.48,3.48,0,0,1,0-.55,3.78,3.78,0,0,1,.1-.57,3.6,3.6,0,0,0,.12-.79,7.69,7.69,0,0,0-.11-1.58c-.09-.53-.19-1.07-.25-1.63a6.42,6.42,0,0,1,0-1.75,5.73,5.73,0,0,1,.23-.93,8.36,8.36,0,0,1,1.17-2c2.54-3.39,8.25-8.72,10.65-8.18a.9.9,0,0,1,.34.15s0,0,0,0a.39.39,0,0,1,.11.22C127.09,86.64,121.47,90.84,121.67,99.35Z"
							/>
							<path fill={colorArray[0]} d="M3.1,44.11c0-.11.06-.23.1-.34C3.16,43.88,3.13,44,3.1,44.11Z" />
							<path fill={colorArray[0]} d="M6.19,35.79c-.07.15-.13.3-.2.44C6.06,36.09,6.12,35.94,6.19,35.79Z" />
							<path fill={colorArray[0]} d="M2.36,46.71l0-.09S2.37,46.68,2.36,46.71Z" />
							<path fill={colorArray[0]} d="M1.09,52.46a1.7,1.7,0,0,0,0-.22A1.7,1.7,0,0,1,1.09,52.46Z" />
							<path fill={colorArray[0]} d="M5,38.65c0-.08.07-.17.11-.26C5.06,38.48,5,38.57,5,38.65Z" />
							<path
								fill={colorArray[0]}
								d="M5.1,38.39c0,.09-.07.18-.11.26C4.33,40.32,3.74,42,3.2,43.77c0,.11-.07.23-.1.34-.25.83-.5,1.67-.72,2.51l0,.09c-.48,1.81-.89,3.66-1.23,5.53a1.7,1.7,0,0,1,0,.22c-.16.92-.31,1.84-.44,2.77a4.39,4.39,0,0,0,2.72-3.08C3.81,48.84,9,45,10.74,42.35s.86-4.29-1.21-4.51c-1.13-.12-1.64-2.64-2.27-4.37-.37.77-.73,1.54-1.07,2.32-.07.15-.13.3-.2.44C5.68,37,5.39,37.66,5.1,38.39Z"
							/>
						</g>
					</g>
				</svg>
				<TranslucentGeneratedChart data={data} colorArray={colorArray} />
			</div>
		</div>
	);
}
