// import React, { useState } from 'react';

// const UsingReact = () => {
//   // State to track progress value
//   const [progressValue, setProgressValue] = useState(0);

//   const handleButtonClick = () => {
//     let value = progressValue; // Start from the current progress value

//     // Create an interval to update progress
//     const interval = setInterval(() => {
//       if (value >= 100) {
//         clearInterval(interval); // Stop the interval when progress reaches 100%
//       } else {
//         value += 10;
//         setProgressValue(value); // Update state
//       }
//     }, 1000); // Update every second
//   };

//   return (
//     <>
//       <div
//         className="progressWrapper"
//         style={{ width: '100%', border: '1px solid #ccc', padding: '10px' }}
//       >
//         <div
//           className="progressBar"
//           style={{
//             width: `${progressValue}%`,
//             height: '20px',
//             backgroundColor: '#4caf50',
//             transition: 'width 0.5s ease-in-out',
//           }}
//         >
//           <span
//             className="progressLabel"
//             style={{ color: '#fff', paddingLeft: '5px' }}
//           >
//             {progressValue}%
//           </span>
//         </div>
//       </div>

//       {/* Disable button when progress reaches 100 */}
//       <button
//         className="start"
//         onClick={handleButtonClick}
//         disabled={progressValue >= 100}
//         style={{
//           marginTop: '10px',
//           padding: '10px',
//           cursor: progressValue >= 100 ? 'not-allowed' : 'pointer',
//           backgroundColor: progressValue >= 100 ? '#ccc' : '#4caf50',
//           color: '#fff',
//           border: 'none',
//         }}
//       >
//         {progressValue >= 100 ? 'Completed' : 'Start'}
//       </button>
//     </>
//   );
// };

// export default UsingReact;



// using throttle it limits the no of execution for a particular period of time

import React, { useState } from 'react';

// Throttle Function
const throttle = (func, delay) => {
  let shouldWait = false;
  return (...args) => {
    if (shouldWait) return;
    func(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
};

const ThrottledProgressBar = () => {
  const [progressValue, setProgressValue] = useState(0);

  // Throttled Function to Update Progress
  const throttledUpdateProgress = throttle(() => {
    setProgressValue((prev) => (prev < 100 ? prev + 10 : prev));
  }, 1000); // Update every second

  const handleButtonClick = () => {
    const interval = setInterval(() => {
      throttledUpdateProgress();
      if (progressValue >= 100) clearInterval(interval);
    }, 500); // Check progress every half second
  };

  return (
    <>
      <div
        className="progressWrapper"
        style={{ width: '100%', border: '1px solid #ccc', padding: '10px' }}
      >
        <div
          className="progressBar"
          style={{
            width: `${progressValue}%`,
            height: '20px',
            backgroundColor: '#4caf50',
            transition: 'width 0.5s ease-in-out',
          }}
        >
          <span
            className="progressLabel"
            style={{ color: '#fff', paddingLeft: '5px' }}
          >
            {progressValue}%
          </span>
        </div>
      </div>

      <button
        className="start"
        onClick={handleButtonClick}
        disabled={progressValue >= 100}
        style={{
          marginTop: '10px',
          padding: '10px',
          cursor: progressValue >= 100 ? 'not-allowed' : 'pointer',
          backgroundColor: progressValue >= 100 ? '#ccc' : '#4caf50',
          color: '#fff',
          border: 'none',
        }}
      >
        {progressValue >= 100 ? 'Completed' : 'Start'}
      </button>
    </>
  );
};

export default ThrottledProgressBar;
