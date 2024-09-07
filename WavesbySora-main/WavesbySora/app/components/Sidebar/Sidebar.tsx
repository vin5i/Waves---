import ListOfSections from '@/app/sync/listOfSections';
import { color, motion } from 'framer-motion';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useContext, useEffect, useState } from 'react';
import { SyncContext } from '@/app/sync/SyncContext/SyncContext';
import { getDominantColors } from '@/app/utils/getDominantColors';
import clsx from 'clsx';

const Sidebar = () => {
	const { functions, data, colorArray } = useContext(SyncContext);
	const [uploadedImagePath, setUploadedImagePath] = useState('Upload Image');
	const [uploadedFile, setUploadedFile] = useState<File | null>(null);

	const handleSectionChange = (section: string) => {
		console.log('Functions', functions);
		console.log('Data', data);
		functions.setSection(section);
	};

	// console.log('Color Array', colorArray);

	useEffect(() => {
		// this run everytime when the file changes and gets the dominant colors from the file if it exists

		console.log('Uploaded File', uploadedFile);

		if (!uploadedFile) return;

		console.log('File Exists');

		const reader = new FileReader();
		reader.readAsDataURL(uploadedFile);

		console.log('Reader', reader);

		reader.onloadend = () => {
			console.log('Reader Loaded');
			const img = new Image();
			img.onload = async () => {
				console.log('Image Loaded');
				const canvas = document.createElement('canvas');
				canvas.width = img.width;
				canvas.height = img.height;
				const ctx = canvas.getContext('2d');
				console.log('Context', ctx);
				if (!ctx) return;

				ctx.drawImage(img, 0, 0, img.width, img.height);
				const imgData = ctx.getImageData(0, 0, img.width, img.height);
				const uniqueColors = await getDominantColors(imgData);
				console.log('Unique Colors', uniqueColors);

				functions.setColorArray(uniqueColors);
				functions.setIsImageUploaded(true);
			};
			img.src = reader.result as string;
		};
	}, [uploadedFile]);

	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: -100 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.5,
						delay: 0.2,
					},
				}}
			>
				<p className="text-xs text-white/80"> Select collaborator </p>
				<div className="mt-2">
					<DropdownMenu>
						<DropdownMenuTrigger className="w-full px-2 py-2 text-left text-white rounded bg-white/5">
							{data.section || 'Select collaborator'}
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-full text-white bg-black border-white/10">
							{Object.keys(ListOfSections).map((key) => (
								<DropdownMenuItem
									className="w-full"
									key={key}
									onSelect={() => handleSectionChange(ListOfSections[key as keyof typeof ListOfSections])}
								>
									{ListOfSections[key as keyof typeof ListOfSections]}
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</motion.div>
			<div className="mt-6">
				<motion.div
					initial={{ opacity: 0, y: -100 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.5,
							delay: 0.2,
						},
					}}
				>
					<p className="text-xs text-white/80"> Seed to generate pattern </p>
					<input
						className="w-full px-3 py-2 mt-4 text-white rounded-md outline-none bg-white/5 placeholder-white/20 active:outline-none focus:outline-none focus:ring focus:ring-white/20"
						name="seed"
						type="text"
						value={data.seed}
						onChange={(e) => functions.setSeed(e.target.value)}
						maxLength={5}
						placeholder="Enter a 5 digit seed"
					/>
				</motion.div>
			</div>
			<div className="mt-6">
				<motion.div
					initial={{ opacity: 0, y: -100 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.5,
							delay: 0.2,
						},
					}}
				>
					<p className="text-xs text-white/80"> Select PFP shape </p>
					<div className="flex w-full mt-4 space-x-4">
						<motion.svg
							whileTap={{ scale: 0.9 }}
							whileHover={{ scale: 1.1 }}
							className="outline-none cursor-pointer focus:outline-none"
							onClick={() => functions.setShape('circle')}
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								stroke="white"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="M19.25 12a7.25 7.25 0 1 1-14.5 0 7.25 7.25 0 0 1 14.5 0Z"
							></path>
						</motion.svg>

						<motion.svg
							className="outline-none cursor-pointer focus:outline-none"
							whileTap={{ scale: 0.9 }}
							whileHover={{ scale: 1.1 }}
							onClick={() => functions.setShape('square')}
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M17.2502 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.2502C18.3548 4.75 19.2502 5.64543 19.2502 6.75V17.25C19.2502 18.3546 18.3548 19.25 17.2502 19.25Z"
								stroke="white"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</motion.svg>
					</div>
				</motion.div>
			</div>
			<div className="mt-6">
				<motion.div
					initial={{ opacity: 0, y: -100 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.5,
							delay: 0.2,
						},
					}}
				>
					<p className="text-xs text-white/80"> Sync Backgrounds </p>
					<div className="flex w-full mt-4 space-x-4">
						<motion.img
							whileTap={{ scale: 0.9 }}
							whileHover={{ scale: 1.1 }}
							onClick={() => functions.setBackground('/assets/backgrounds/black.png')}
							className="w-[30px] h-[30px] rounded-sm border-white/10 border-[0.2px]"
							src="/assets/backgrounds/black.png"
						/>
						<motion.img
							whileTap={{ scale: 0.9 }}
							whileHover={{ scale: 1.1 }}
							onClick={() => functions.setBackground('/assets/backgrounds/space.jpeg')}
							className="w-[30px] h-[30px] rounded-sm border-white/10 border-[0.2px]"
							src="/assets/backgrounds/space.jpeg"
						/>
						<motion.img
							whileTap={{ scale: 0.9 }}
							whileHover={{ scale: 1.1 }}
							onClick={() => functions.setBackground('/assets/backgrounds/purple.jpeg')}
							className="w-[30px] h-[30px] rounded-sm border-white/10 border-[0.2px]"
							src="/assets/backgrounds/purple.jpeg"
						/>
					</div>
				</motion.div>
			</div>
			<div className="mt-6">
				<motion.div
					initial={{ opacity: 0, y: -100 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.5,
							delay: 0.2,
						},
					}}
				>
					<p className="text-xs text-white/80"> Collaborator&apos;s Background </p>
					<div className="flex w-full mt-4 space-x-4">
						<motion.div
							whileTap={{ scale: 0.9 }}
							whileHover={{ scale: 1.1 }}
							className="flex items-center justify-center space-x-2"
							onClick={() => functions.setBackground('/assets/backgrounds/mulga.png')}
						>
							<motion.img className="w-[30px] h-[30px] rounded-sm border-white/10 border-[0.2px]" src="/assets/backgrounds/mulga.png" />
							<p className="text-xs tracking-wider uppercase">Mulga</p>
						</motion.div>
					</div>
				</motion.div>
			</div>
			<div className="mt-6">
				<motion.div
					initial={{ opacity: 0, y: -100 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.5,
							delay: 0.2,
						},
					}}
				>
					<p className="text-xs text-white/80"> Palette from Image </p>
					<label className="w-min text-xs mt-0 rounded-sm text-white border-white/10 border-[0.2px] cursor-pointer">
						<span className="pt-12">{uploadedImagePath.length > 24 ? uploadedImagePath.substring(0, 24) + '...' : uploadedImagePath}</span>
						<input
							type="file"
							accept="image/*"
							onChange={(event) => {
								const file = event.target.files?.[0] ?? null;
								if (file) {
									const reader = new FileReader();
									reader.onloadend = () => {
										setUploadedImagePath(file.name);
										setUploadedFile(file);
									};
									reader.readAsDataURL(file);
								}
							}}
							className="hidden"
						/>
					</label>
				</motion.div>
				{data.isImageUploaded && (
					<div className="flex justify-between py-4 mt-6 text-white border-t border-white/10">
						{
							<>
								{colorArray.map((hexorRGB: any, index: number) => (
									<div key={index} style={{ backgroundColor: hexorRGB, width: '20px', height: '20px' }}></div>
								))}
							</>
						}
					</div>
				)}
			</div>
		</>
	);
};

export default Sidebar;
