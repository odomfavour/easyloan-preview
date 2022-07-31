import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';


function ProfileProgressBar() {
  const [progressInterval, setProgressInterval] = useState();
  const [pUser, setPUser] = useState({});

    useEffect(() => {
		setPUser(JSON.parse(localStorage.getItem("pUser")));
	}, []);

  // console.log(user);
  // const now = 80;

  function Bar() {
    let progress = 0;

    if (
      pUser.name !== ""
    ){progress += 25}
    if (
      pUser.Phone !== ""
    ){progress += 25}
    if (
      pUser.photoURL !== ""
    ){progress += 25}
    if (
      pUser.street !== ""
    ){progress += 25}
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