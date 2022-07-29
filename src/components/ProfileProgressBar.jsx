import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useAppContext } from "../context/context";


function ProfileProgressBar() {
  const { user } = useAppContext();
  const [progressInterval, setProgressInterval] = useState();

  // console.log(user);
  // const now = 80;

  function Bar() {
    let progress = 0;

    if (
      user.name !== ""
    ){progress += 25}
    if (
      user.email !== ""
    ){progress += 25}
    if (
      user.photoURL !== ""
    ){progress += 25}
    // if (
    //   user.accessToken !== ""
    // ){progress += 25}
    setProgressInterval(progress);
  }

  useEffect(() => {
    Bar();
  })
  return (
    <>
			<style type="text/css">
				{`
          .progress-bar{
            background-color: #d9d9d9;
            color: #121010;
            text-align: right;
          }
          .progress {
            height: 10px ;
          }
        `}
      </style>
    <ProgressBar now={progressInterval} label={`${progressInterval}%` } />
  </>
  );
  
  
}

export default ProfileProgressBar;