import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import chessArmPhoto from './assets/chess_robot.jpg'
import selfDrivingCarPhoto from './assets/car.jpg'
import stereoCameraPhoto from './assets/stereo_camera.jpg'
const DATA = [
  { id: "project-0", name: "Chess Robot Arm", img: chessArmPhoto, keyPoints: [
    "Created chess robot arm with foothill engineering team.",
    "Plays against human using stockfish.",
    "Used aruco markers to identify and localize pieces to squares on the board.",
    "Calibrated and found extrinsic camera params to find piece base center."
  ], github: "https://github.com/FH-EngineeringClub/UR10_Workspace"},
  { id: "project-1", name: "Self Driving Car", img: selfDrivingCarPhoto, keyPoints: [
    "Individually created self driving car using mono camera setup.",
    "Setup all car electronics and RPI4.",
    "Created software pipeline from recording data to driving car.",
    "Used tensorflow with convolutional layers for vision-to-actuator model."
  ], github: "https://github.com/hovak101/DAES_SelfDrivingCar"},
  { id: "project-2", name: "Stereo Camera Depth Detection", img: stereoCameraPhoto, keyPoints: [
    "Setup 2 webcameras to measure depth using stereo camera setup.",
    "Used opencv stereo camera and calibration libraries.",
    "Created depth map estimation from disparity map."
  ]}
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App projects={DATA}/>
  </StrictMode>,
)
