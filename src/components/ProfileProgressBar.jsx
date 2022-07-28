import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import React, { useState, useEffect } from 'react';

// let progressInterval = 60;

function ProfileProgressBar() {
  const now = 60;
  return <ProgressBar now={now} label={`${now}%`} />;
  
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   progressInterval = setProgress(() => {
  //     setProgress(prev => prev + 1)
  //   }, 100);
  // }, []);

  // useEffect(() => {
  //   if (progress >= 100) {
  //     clearInterval(progressInterval);
  //   };
  // }, []);

  // return(
  //   <div className='progress profile-completion-bg ' style={{height: 10}}>
  //     <div className='progress-bar ' role="progressbar" 
  //     style={{width: "${progress}%"}}>{progress}%</div>
  //   </div>
  // )
}

export default ProfileProgressBar;