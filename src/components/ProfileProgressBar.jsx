import ProgressBar from 'react-bootstrap/ProgressBar';

function ProfileProgressBar() {
  const now = 60;
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default ProfileProgressBar;