import { motion } from 'framer-motion';

const TreeAnimation = () => {
  const svgContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2 } },
  };

  const branchPathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 3, ease: 'easeInOut' },
    },
  };

  const leavesGroupVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 3, // Start after branches are done
        staggerChildren: 0.1,
      },
    },
  };

  const leafPathVariants = {
    hidden: { pathLength: 0, opacity: 0, fillOpacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      fillOpacity: 1,
      rotate: [0, 2.5, -2.5, 2.5, 0], // Adjusted rotation for visibility
      transition: {
        pathLength: { duration: 1, ease: 'easeOut' },
        opacity: { duration: 1, ease: 'easeOut' },
        fillOpacity: { duration: 1, ease: 'easeOut' },
        rotate: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 5, // Duration of one wave cycle
          ease: "easeInOut"
        }
      }
    },
  };

  return (
    <motion.svg
      viewBox="0 0 898.82 966.42"
      variants={svgContainerVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
      }}
      preserveAspectRatio="xMidYMax meet"
      aria-label="Animated drawing of a growing tree with branches and leaves"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g id="branches" variants={branchPathVariants} initial="hidden" animate="visible">
        <motion.path
          className="cls-21"
          d="M493.31,914.05c-8.59-15.51-10.01-24.62-14.27-41.23-23.03-89.72-36.67-202.89,49.16-264.8.28-.2,1.02-1.84,3.17-3.17,55.12-44.42,133.91-53.85,201.38-70.56-50.51-3.38-99.56,8.54-147.47,22.2,53.71-43.49,100.02-86.21,93.55-161.74-.16-1.88-.92-17.23-4.76-15.86,2.79,16.75.33,40.06-4.76,56.29-8.48,27.05-34.63,55.85-55.5,74.53-7.18,10.2-19.2,16.13-28.54,23.78-42.05,34.45-91.09,63.1-127.65,103.07.62-39.58-7.86-92.43-2.38-130.82,1.58-11.09,11.68-28.87,17.44-38.85,14.36-24.85,32.17-39.73,50.74-60.26,57.26-63.29,135.77-119.4,123.68-216.44-2.09-16.78-17.4-50.02-33.3-53.91,82.64,93.75-42.17,201.78-111,259.26-16.25,13.57-33.22,26.49-49.16,40.43l-15.86-166.49c8.36-25.28,33.87-52.92,61.84-54.71.28-1.83-1.53-1.49-1.59-1.59-31.21-.38-48.51,17.13-64.22,41.23-11.26-56.82-28.04-113.26-60.25-161.74l37.26,111c5.32,58.87,10.79,121.63,9.51,180.77-.07,3.29,3.28,10.28,1.59,14.27-.04.1-1.87-.25-1.59,1.59,2.61,51.38,2.34,103.32-1.59,154.6-3.81,7.56-62.84-63.37-66.6-68.18-42.95-55.11-89.98-134.1-109.41-201.38-1.76-6.1-3.31-12.26-4.74-18.47l-1.99-9.01c-6.6-31.41-10.44-63.74-18.64-94.62l3.17,64.22c-.17,17.31,6.44,33.64,5.55,50.74-26.65-17.66-52.69-35.77-80.08-52.33v1.59c21.87,28.14,56.46,39.92,84.04,60.26,40.89,103.25,83.41,206.9,149.05,297.31.1,4.2-3.41,1.52-5.55.79-26.76-9.13-56.71-34.14-91.18-45.98l-161.74-82.45c.35.44,1.62,4.83,3.17,6.34,23.71,23.15,75.66,47.83,104.65,66.6,9.55,6.18,19.02,12.9,28.54,19.03,5.72,3.68,13.93,6.58,20.61,11.1,34.01,22.99,110.03,86.35,117.34,127.65,6.34,35.83-14.94,142.72-22.2,183.14-3.38,18.8-.08,22.76-9.51,42.81-26.13,55.55-90.21,29.88-137.95,50.74,54.38-1.57,110.25,2.08,164.91,1.59,86.27-.78,174.31-3.15,260.05-3.17-6.45-.29-12.67-2.25-19.03-3.17-49.29-7.16-111.43,1.9-137.95-45.98Z"
          strokeLinecap="round"
          fill="currentColor"
        />
      </motion.g>
      <motion.g id="leaves" variants={leavesGroupVariants} initial="hidden" animate="visible">
        <motion.path className="cls-18" d="M123.68,456.67c.35.44,1.62,4.83,3.17,6.34-39.49,34.68-103.88,12.82-113.37-38.06,24.59-9.29,64.39-16.3,87.21,0,9.94,7.1,15.27,21.91,22.99,31.71Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-5" d="M49.16,371.04c-.33-.33-.84-2.44-4.76-6.34-.19-.19.09-3.86-2.38-4.76-2.94,2.72,2.16,4.37,2.38,4.76,1.9,3.39,2.64,3.81,4.76,6.34,10,11.97,21.89,21.96,33.3,32.51-49.21,14.54-75.69-29.26-82.45-71.35,43.75-22.52,99.61,23.68,87.21,71.35-11.36-11.68-26.73-21.07-38.06-32.51Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-17" d="M806.31,420.2c22.09-2.19,52.71,3.62,62.63,26.16-31.97,31.59-71.64,29.17-113.37,29.33-8.47-33.39,21.34-52.59,50.74-55.5Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-5" d="M845.95,274.32c4.12-.31,22.85.07,24.58,3.96,1.85,24.74-12.49,63.78-38.85,70.56-8.14,2.1-42.18,3.79-45.19-3.96-4.28-11.03,7-36.76,14.27-45.98,9.98-12.67,28.9-23.36,45.19-24.58Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-13" d="M788.86,485.21c8.28-.51,63.32,10.76,64.22,16.65-16.96,30.57-44.53,52.85-81.66,43.61-6.61-1.64-27.22-12.97-26.16-21.41.33-2.61,18.1-28.53,21.41-30.92,5.05-3.66,16.24-7.56,22.2-7.93Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-13" d="M616.03,626.33c54.86-1.62,69.54,53.58,49.16,96.73-41.74-18.77-78.46-47.76-49.16-96.73Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-18" d="M738.12,290.18c3.18-.03,5.01-.64,7.14,2.38,14.53,49.46-12.7,82.21-62.63,84.83-11.33-34.25,18.18-86.91,55.5-87.21Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-16" d="M717.51,93.55c2.04.38,2.7.68,3.96,2.38,9.03,42.06-21.31,92.94-68.98,76.9,4.82-15.99-3.23-27.49,5.55-43.61,5.65-10.37,49.92-37.46,59.46-35.68Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-5" d="M321.1,288.59c30.79-6.95,76.01,57.08,42.81,82.45-15.06-13.74-44.59-20.63-54.71-38.85-1.73-3.12-8.49-24.79-7.93-26.96.33-1.25,18.56-16.36,19.82-16.65Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-12" d="M126.06,114.17c47.67-.99,66.85,44.65,47.57,85.63-6.93-3.88-25-2.61-30.13-4.76-14.07-5.9-20.65-66.03-17.44-80.87Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-18" d="M466.18,69.77c7.4,2.37,5.83,30.57,4.76,37.26-4.3,26.76-25.42,47.57-53.12,48.36-12.62-26.54-2.99-60.44,22.2-76.11,3.33-2.07,21.77-9.75,24.58-9.51.54.05,1.17-.13,1.59,0Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-16" d="M283.04,131.61c18.34-2.66,40.07,5.75,54.71,16.65-22.15,37.06-59.38,44.66-95.14,22.2,3.8-18.21,21.9-36.16,40.43-38.85Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-20" d="M344.88,233.09c18.13.94,34.85-1.31,46.78,15.06,7.41,10.18,22.38,51.84,5.55,56.29-35.82,9.47-67.18-39.25-52.33-71.35Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-18" d="M116.55,497.9c13.69-2.08,31.74.01,42.02,10.31-12.35,7.27-12.07,24.76-24.58,32.51-10.99,6.8-64.81,11.72-67.39-.79s37.78-40.17,49.95-42.02Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-5" d="M267.18,659.63c3.52-.23,13.43,24.64,13.48,26.16.43,13.71-36.1,51.45-49.95,57.88-19.8-30.82-3.67-80.56,36.47-84.04Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-8" d="M294.14,193.45c3.34-.34,15.07-1.09,16.65,2.38-3.01,18.06-20.17,79.47-46.78,72.15-10.44-2.87-15.63-36.35-11.89-46.78,3.47-9.67,32.08-26.73,42.02-27.75Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-6" d="M354.39,174.42c20.45-2.37,38.06.17,48.36,19.82,1.19,2.26,4.77,7.47,4.76,7.93-.05,1.58-18.37,23.95-19.82,24.58-15.92,6.9-43.7-10.8-51.53-24.58-11.62-20.44-3.95-25.18,18.24-27.75Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-7" d="M232.3,52.33c22.22,18.48,36.38,38.93,26.16,68.98-1.39,4.1-19.7,27.34-21.41,27.75-7.61,1.81-17.42-19.93-18.24-26.16-1.37-10.47,2.45-69.58,13.48-70.56Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-18" d="M119.72,290.18c13.63-1.82,32.94,4.22,45.19,10.31.13,42.07-58.8,52.48-80.87,19.03,8.19-10.61,21.91-27.5,35.68-29.33Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-5" d="M662.01,271.15c16.68-2.37,36.81,4.75,49.95,15.06-14.93,23.48-30.86,40.19-61.05,32.51-37.45-9.53-13.2-44.13,11.1-47.57Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-16" d="M562.12,226.75c6.35,8.26,20.82,12.68,26.16,21.41,15.44,25.21-6.87,60.35-35.68,62.63-19.82-28.84-2.89-55.99,9.51-84.04Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-5" d="M773.01,147.47c14.1-1.14,9.47,33.01,7.14,43.61-4.45,20.19-18.09,25.35-32.51,37.26-12.64-11.91-21.47-21.79-16.65-40.43,3.21-12.39,29.19-39.39,42.02-40.43Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-18" d="M143.41,225.31l-.24,1.57c2.11,15.9-29.81,25.87-41.15,22.57-12.76-3.71-32.84-33.28-36.99-46.57,20.66-8.66,47.23-4.66,65.41,7.61,4.4,2.97,9.67,12.07,12.97,14.82Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-5" d="M276.7,25.37c5.32-1.44,34.4,25.73,37.26,30.92,7.72,14.03,3.57,26.15.79,40.43-40.18,24.02-58.34-45.52-38.06-71.35Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-5" d="M830.09,353.6c17.81-4.04,48.85,12.49,64.22,21.41-22.64,20.54-56.56,40.41-82.45,12.69,3.33-11.75-.28-29.89,18.24-34.09Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-5" d="M502.65,214.06c.28-1.83-1.53-1.49-1.59-1.59-12.86-25.02,41.06-65.44,67.39-42.81,8.53,7.33-10.12,33.69-19.03,39.64-19.99,13.36-27.76,3.54-46.78,4.76Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-5" d="M528.82,285.42c17.85,12.15,24.49,38.34,15.06,57.88-.84,1.75-16.85,21.14-18.24,21.41-4.45.86-15.79-9.11-18.24-13.48-14.13-25.23,3.97-48.27,21.41-65.8Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-6" d="M360.74,375.8c4.18-1.19,20.12,20.57,21.41,24.58,7.38,22.96-14.26,33.71-17.44,55.5-9.8,7.59-20.13-1.98-23.78-11.1-11.19-27.94,9.31-45.54,19.82-68.98Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-14" d="M341.71,4.76c29.11,23.13,35.78,50.62,23.78,85.63-45.71-11.54-40.85-50.85-23.78-85.63Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-8" d="M498.69,502.65c39.68,16.16,30.22,44.96,14.27,76.11-35.1-10.3-41-52.35-14.27-76.11Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-5" d="M184.73,597.79c2.86-.47,22.21-.3,22.99.79,6.9,36.18-30.99,45.35-53.12,64.22-20-21.64,5.22-60.9,30.13-65.01Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-18" d="M156.98,559.74c3.18,1.41,7.54,8.1,14.27,7.93-3.83,3.84-8.79,19.06-18.24,23.78-20.62,10.33-50.12-3.2-64.22-19.82,17.69-21.51,44.25-22.46,68.18-11.89Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-16" d="M597,377.39c23.27-6.77,63.25,22.47,57.88,48.36-.34,1.62-3.76,8.35-5.55,8.72-1.95.4-33.43-13.94-36.47-15.86-3.21-2.02-27.36-24.3-27.75-26.16-.42-2.03,10.04-14.53,11.89-15.06Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-16" d="M544.67,456.67c34.93-12.01,26.52,86.15-11.1,77.7-12.92-9.89,2.84-74.86,11.1-77.7Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-12" d="M482.83,139.54c3.12-.29,6.37.2,9.51,0,5.83,1.86,1.02,28.99-.79,35.68-2.64,9.74-17.97,40.11-29.33,38.85-1.12-.12-14.77-15.23-15.06-16.65-2.84-13.62,18.99-56.31,35.68-57.88Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-16" d="M202.96,318.72c.53.01,1.06-.01,1.59,0,10.28.22,22.93,2.61,31.71,8.72-2.36,44.95-53.08,39.15-74.53,11.1-.4-5.98,35.58-17.24,41.23-19.82Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-5" d="M478.08,261.63c5.26-.88,36.04,3.74,39.64,6.34,11.16,8.06-17.79,32.43-28.54,34.88-8,1.83-32.35.57-38.06-4.76-7.02-6.56,16.17-34.66,26.96-36.47Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-5" d="M678.66,594.62c.37,1.43,1.66,7.07,1.59,7.93-1.33,15.77-42.82,11.31-53.12,3.17-37.46-29.63,40.02-55.85,51.53-11.1Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-5" d="M573.22,191.86c8.98-3.36,45.46,3.1,52.33,11.1,8.68,10.12-4.77,19.29.79,30.92-26.06,10.96-60.45-10.82-57.08-39.64,1.48-.31,3.26-2.11,3.96-2.38Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-16" d="M397.21,23.78c36.87,11.61,29.69,50.46,14.27,77.7-29.3-9.71-26.41-55.83-14.27-77.7Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-8" d="M533.71,416.13c.69-2.06-4.44-1.14-2.38-3.17,9.72,2.44,24.16-10.73,32.51-12.69,2.15-.5.61,3.65,3.96,3.17,1.85-.26,8.98-4.76,9.51-4.76,9.18.08,19,20.52,22.99,27.75-16.69,14.52-79.09,26.9-66.6-10.31Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-5" d="M630.3,332.99c9.64.77,43.08,32.27,43.61,37.26.34,3.28-9.32,9.72-11.89,10.31-25.81,5.83-55.46-16.01-53.12-43.61.86-1.89,19.68-4.1,21.41-3.96Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-5" d="M213.27,417.03c8.78-1.67,19.16,31.71,18.24,38.85-.19,1.48-11.62,25.92-12.69,26.96-15.38,15.03-29.35-11.78-28.54-26.96.47-8.84,14.31-37.2,22.99-38.85Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-16" d="M268.77,586.69c4.42.05,10.71,27.87,8.72,32.51-4.24,9.89-42.14,29.93-51.53,26.16-10.7-30.8,21.12-45.94,42.81-58.67Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-14" d="M252.12,445.57c3.66,5.69,16.68,18.33,17.44,21.41,4.62,18.59-5.47,44.15-27.75,35.68-24.47-9.3-3.14-57.13,2.38-74.53.98,6.69,4.39,11.94,7.93,17.44Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-18" d="M836.43,210.89c10.52,31.07-12.21,58.24-44.4,55.5-16.75-35.94,18.55-45.15,44.4-55.5Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-2" d="M113.37,364.7c17.51,15.59,40.12,40.96,30.13,65.01-36.94,3.57-50.29-39.33-30.13-65.01Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-5" d="M331.4,118.92c-.07-.09-.54-.07-1.59-1.59-2.22-3.2-12.84-21.21-8.72-23.78,14.58-.3,38.03,5,49.16,14.27,9.63,8.02,21.28,28.84,1.59,31.71-16.26,2.37-30.89-8.26-40.43-20.61Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-2" d="M576.39,145.88c10.13-1.14,43.96,5.1,46.78,16.65,1.37,5.59-7.84,26.21-11.89,27.75-16.97,6.44-39.97-25.89-46.78-38.85.45-2.74,9.78-5.31,11.89-5.55Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-8" d="M459.05,0c17.81,25.05,8.55,64.59-26.96,65.01-14.73-37.33,8.77-39.91,26.96-65.01Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-16" d="M527.23,439.23c25.1-2.71-.05,63.24-15.86,61.84-.91-.08-14.65-9.09-15.06-10.31-4.4-12.77,17.49-50.09,30.92-51.53Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-8" d="M290.97,472.53c6.57-.05,31.33,38.1,29.33,46.78-42.9,38.48-56.92-46.55-29.33-46.78Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-17" d="M164.12,404.34c2.54-.37,5.35.25,7.93,0,8.01,3,15.76,60.04,9.51,69.77-26.78,4.08-38.46-66.68-17.44-69.77Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-5" d="M693.73,236.26c17.85-2.01,37.75,9.72,45.19,26.16-22.09,1.93-55.94,16.55-68.18-9.51,4.36-7.85,13.98-15.63,22.99-16.65Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-12" d="M197.41,182.35c3.23-.61,7.64.42,11.1,0,6.34,2,.85,36.19-2.38,43.61-3.39,7.78-7.39,8.67-11.89,15.06-21.6-10.08-17.83-54.73,3.17-58.67Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-5" d="M571.63,98.31c18.79-2.42,33.22,12.5,38.85,29.33-20.49,12.68-50.1,6.05-53.91-20.61.59-2.3,12.82-8.43,15.06-8.72Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
        <motion.path className="cls-6" d="M546.9,641.98c.12-.32-.18-2.1.86-4.4,7.51-16.71,22.66-26.85,31.68-42.38,17.27,4.82,12.54,27.77,3.71,41.23-8.79,13.57-24.02,24.02-39.64,24.02-8.14,0-16.27-2.11-24.02-4.76Z" strokeLinecap="round" variants={leafPathVariants} fill="currentColor" />
      </motion.g>
    </motion.svg>
  );
};

export default TreeAnimation;
