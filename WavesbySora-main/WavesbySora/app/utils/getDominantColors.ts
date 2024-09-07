import quantize, { ColorMap } from 'quantize';

type RgbPixel = [number, number, number];

const rgbToHex = (r: number, g: number, b: number) => {
	const bin = (r << 16) | (g << 8) | b;
	return (bin & 0xffffff).toString(16).toUpperCase().padStart(6, '0');
};

const getDominantColors = (imgData: ImageData) => {
	const colorMap: RgbPixel[] = [];

	for (let i = 0; i < imgData.data.length; i += 4) {
		const r = imgData.data[i];
		const g = imgData.data[i + 1];
		const b = imgData.data[i + 2];
		const alpha = imgData.data[i + 3];

		// Skip transparent pixels or colors too close to black or white
		if (alpha === 0 || (r < 10 && g < 10 && b < 10) || (r > 245 && g > 245 && b > 245)) {
			continue;
		}

		colorMap.push([r, g, b]);
	}

	const colorCube = quantize(colorMap, 10) as ColorMap;
	return colorCube.palette().map((color) => '#' + rgbToHex(...color));
};
export { getDominantColors };
