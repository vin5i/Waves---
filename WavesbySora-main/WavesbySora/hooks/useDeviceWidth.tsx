import { useState, useEffect } from 'react';

const useDeviceWidth = () => {
	// Initialize state with undefined
	const [width, setWidth] = useState<number | undefined>(undefined);
	const handleResize = () => {
		// Update the width state on window resize
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		// Check if window is defined (SSR)
		if (typeof window !== 'undefined') {
			// Set width to window inner width
			setWidth(window.innerWidth);

			// Add event listener for window resize
			window.addEventListener('resize', handleResize);

			// Cleanup the event listener on component unmount
			return () => window.removeEventListener('resize', handleResize);
		}
	}, []); // Empty dependency array ensures this effect runs only once on mount

	return width;
};

export default useDeviceWidth;
