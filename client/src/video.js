import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './Video.css';

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const mergedVideoRef = useRef(null);

  const startRecording = async () => {
    setIsRecording(true);

    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    videoRef.current.srcObject = stream;
    audioRef.current.srcObject = stream;

    videoRef.current.play();
    audioRef.current.play();

    const mediaRecorder = new MediaRecorder(stream);
    const chunks = [];

    mediaRecorder.ondataavailable = (event) => {
      chunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      mergedVideoRef.current.src = URL.createObjectURL(blob);
      mergedVideoRef.current.controls = true;
    };

    mediaRecorder.start();
    setTimeout(() => {
      mediaRecorder.stop();
      setIsRecording(false);
    }, 10000); // Recording duration (5 seconds in this example)
  };

  return (
    <section class="rightSection">
        <div class="mainContainer">
          <div class="header-mainContainer">
            <h4>CREATIVITY</h4>
          </div>

          <div class="main-mainContainer">
            <div class="gridgit">
              <div class="gridheading">DANCING</div>
              <motion.div 
                initial={{ x: '100vw'}}
                animate={{ x: 0}}
                transition={{ delay: 0.5,type: 'spring'}}
              >
              <div class="gridContainer">
    <div className="Video-App">
      
      <div className="creativity-video">
        <div className="package-video">
      <div className="video-container">
        <video ref={videoRef} className="video-preview" muted playsInline></video>
        <audio ref={audioRef} muted playsInline></audio>
      </div>
      {!isRecording && (
        <button onClick={startRecording}>Start Recording</button>
      )}
      {isRecording && <p>Recording...</p>}
      </div>
      <div className="merged-video-container">
        <video ref={mergedVideoRef} className="merged-video" controls></video>
      </div>
    </div>
    
    </div>
  
    </div>
    </motion.div>
    </div>
    </div>
    </div>
    </section>
  );
}

export default App;