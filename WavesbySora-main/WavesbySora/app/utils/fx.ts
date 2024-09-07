export const parseRGB = (rgbStr: string): { r: number; g: number; b: number } => {
	const match = rgbStr.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
	if (!match) {
		// return the original string
		return { r: 0, g: 0, b: 0 };
	}
	return { r: parseInt(match[1], 10), g: parseInt(match[2], 10), b: parseInt(match[3], 10) };
};

// Function to lighten the color
export const lightenRGBColor = (rgb: { r: number; g: number; b: number }, percent: number): string => {
	const amt = Math.round(2.55 * percent);
	const R = rgb.r + amt;
	const G = rgb.g + amt;
	const B = rgb.b + amt;
	return `rgb(${R < 255 ? (R < 1 ? 0 : R) : 255}, ${G < 255 ? (G < 1 ? 0 : G) : 255}, ${B < 255 ? (B < 1 ? 0 : B) : 255})`;
};

export const lightenColor = (color: string, percent: number) => {
	const num = parseInt(color.replace('#', ''), 16),
		amt = Math.round(2.55 * percent),
		R = (num >> 16) + amt,
		G = ((num >> 8) & 0x00ff) + amt,
		B = (num & 0x0000ff) + amt;
	return (
		'#' +
		(0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 + (B < 255 ? (B < 1 ? 0 : B) : 255))
			.toString(16)
			.slice(1)
	);
};

export const darkenColor = (color: string, percent: number) => {
	const num = parseInt(color.replace('#', ''), 16),
		amt = Math.round(2.55 * percent),
		R = (num >> 16) - amt,
		G = ((num >> 8) & 0x00ff) - amt,
		B = (num & 0x0000ff) - amt;
	return (
		'#' +
		(0x1000000 + (R > 0 ? (R > 255 ? 255 : R) : 0) * 0x10000 + (G > 0 ? (G > 255 ? 255 : G) : 0) * 0x100 + (B > 0 ? (B > 255 ? 255 : B) : 0))
			.toString(16)
			.slice(1)
	);
};

interface ChartObject {
	name: string;
	uv: number;
	pv: number;
	kv: number;
	qv: number; // New wave
}

export function generateChartValues(inputStr: string): ChartObject[] {
	const numValue = parseInt(inputStr, 10);
	const outputArray: ChartObject[] = [];

	for (let i = 1; i <= 7; i++) {
		const t = i + numValue; // We add numValue to give each string its own phase

		const uv = Math.sin(t) * 225 + Math.sin(t * 1.5) * 100 + 375; // Higher amplitude
		const pv = Math.sin(t * 0.8) * 300 + Math.sin(t * 2.2) * 150 + 600; // Middle amplitude
		const kv = Math.sin(t * 0.5) * 150 + Math.sin(t * 2.7) * 75 + 700; // Lower amplitude
		const qv = Math.sin(t * 0.6) * 250 + Math.sin(t * 1.9) * 125 + 550; // New formula for qv

		const obj: ChartObject = {
			name: `v${i}`,
			uv: Math.round(uv),
			pv: Math.round(pv),
			kv: Math.round(kv),
			qv: Math.round(qv), // New wave
		};

		outputArray.push(obj);
	}

	return outputArray;
}

export function generateColorPalette(seedStr: string): string[] {
	const seed = parseInt(seedStr, 10);
	const colorArray: string[] = [];

	const colorRanges = [
		{ r: [136, 216], g: [132, 161], b: [94, 108] },
		{ r: [130, 221], g: [202, 140], b: [157, 216] },
	];

	for (let i = 1; i <= 7; i++) {
		const t = i + seed;
		// const colorRange = colorRanges[i % colorRanges.length];

		const red = Math.sin(t) * 127 + 128;
		const green = Math.sin(t + 2) * 127 + 128;
		const blue = Math.sin(t + 4) * 127 + 128;

		const color = `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`;
		colorArray.push(color);
	}

	console.log('colorArray through original function: ', colorArray);

	return colorArray;
}
