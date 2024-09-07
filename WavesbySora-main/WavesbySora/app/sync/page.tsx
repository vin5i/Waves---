'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import ListOfSections from './listOfSections';
import ChartSection from './ChartSection';
import { motion } from 'framer-motion';
import NemoniumComponent from './NemoniumComponent';
import DexHunterComponent from './DexHunterComponent';
import ENCSComponent from './ENCSComponent';
import Sidebar from '../components/Sidebar/Sidebar';
import IndigoComponent from './IndigoComponent';
import MonoXRPComponent from './MonoXRPComponent';
import JupiterAnalyticsComponent from './JupiterAnalyticsComponent';
import ButaneProtocol from './ButaneComponent';
import JupiterComponent from './JupiterComponent';
import Lorenzo from './Lorenzo';
import AdaWhale from './AdaWhaleComponent';
import { generateColorPalette } from '../utils/fx';
import { SyncContext } from './SyncContext/SyncContext';
import DogeLabs from './DogeLabs';

export default function Sync() {
  const [section, setSection] = useState(ListOfSections.Chart);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [background, setBackground] = useState('/assets/backgrounds/black.png');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [seed, setSeed] = useState('0000');
  const [shape, setShape] = useState('circle');
  const [uploadedImage, setUploadedImage] = useState('');
  const [colorArray, setColorArray] = useState(generateColorPalette(seed));

  const wrapUpFunctionsInObject = {
    setSection,
    setBackground,
    setIsSidebarOpen,
    setSeed,
    setShape,
    setColorArray,
    setIsImageUploaded,
  };

  const wrapUpDataInObject = {
    section,
    background,
    isSidebarOpen,
    seed,
    shape,
    isImageUploaded,
  };

  useEffect(() => {
    setIsImageUploaded(false);
    setUploadedImage('');
    setColorArray(generateColorPalette(seed));
  }, [seed]);

  // Function to download the current chart as an SVG
  const handleDownload = () => {
    const chartElement = document.querySelector("#chart-section svg") as SVGElement;
    if (chartElement) {
      const svgData = new XMLSerializer().serializeToString(chartElement);
      const blob = new Blob([svgData], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'chart.svg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url); // Clean up
    }
  };

  // Function to download a range of charts as SVGs in a ZIP file
  const handleRangeDownload = async () => {
    const zip = new JSZip();

    for (let i = 99249; i <= 99999; i++) {
      const currentSeed = i.toString().padStart(4, '0'); // Padding for consistent naming
      setSeed(currentSeed);
      setColorArray(generateColorPalette(currentSeed));

      await new Promise((resolve) => setTimeout(resolve, 100)); // Pause to allow rendering

      const chartElement = document.querySelector("#chart-section svg") as SVGElement;
      if (chartElement) {
        const svgData = new XMLSerializer().serializeToString(chartElement);
        zip.file(`${currentSeed}.svg`, svgData);
      }
    }

    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'charts.zip');
    });
  };

  return (
    <main>
      <SyncContext.Provider
        value={{
          functions: wrapUpFunctionsInObject,
          data: wrapUpDataInObject,
          background,
          colorArray,
          uploadedImage,
          setUploadedImage,
          seed,
          shape,
        }}
      >
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onMouseEnter={() => setIsSidebarOpen(true)}
            onMouseLeave={() => setIsSidebarOpen(true)}
            id="sidebar"
            className="absolute top-0 left-0 hidden h-full px-4 py-4 overflow-hidden md:block"
          >
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              className={clsx('h-auto w-full rounded-sm p-8 ring-white/10 ring-2')}
            >
              {isSidebarOpen && <Sidebar />}
            </motion.div>
          </motion.div>
          <div id="chart-section" className="flex flex-col">
            {section === ListOfSections.Chart && <ChartSection />}
            {section === ListOfSections.Nemonium && <NemoniumComponent />}
            {section === ListOfSections.Dragon && <DexHunterComponent />}
            {section === ListOfSections.ENCS && <ENCSComponent />}
            {section === ListOfSections.Indigo && <IndigoComponent />}
            {section === ListOfSections.MonoXRP && <MonoXRPComponent />}
            {section === ListOfSections.Jupiter && <JupiterComponent />}
            {section === ListOfSections.JupiterAnalytics && <JupiterAnalyticsComponent />}
            {section === ListOfSections.Butane && <ButaneProtocol />}
            {section === ListOfSections.Lorenzo && <Lorenzo />}
            {section === ListOfSections.AdaWhale && <AdaWhale />}
            {section === ListOfSections.DogeLabs && <DogeLabs />}
          </div>
          <button
            onClick={handleDownload}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Download Chart
          </button>
          <button
            onClick={handleRangeDownload}
            className="mt-4 p-2 bg-green-500 text-white rounded"
          >
            Download Range (99249-99999)
          </button>
        </div>
      </SyncContext.Provider>
    </main>
  );
}
