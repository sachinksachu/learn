import React, { useState, useEffect, useRef } from 'react';
import OverlayVideo from "../../assets/overlay-video.mov"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import "./VideoOverlay.css"

function VideoOverlay(props) {
    const [isReady, setIsReady] = useState(false)
    const inputVideoRef = useRef(null)
    const overlayVideoRef = useRef(null)
    const canvasRef = useRef(null)
    const canvasContextRef = useRef(null)
    useEffect(() => {

        canvasContextRef.current = canvasRef.current.getContext('2d');

        const constraints = {
            video: {
              facingMode: 'user',
              width: window.innerHeight,
              height: window.innerWidth,
            },
          }
          navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
            inputVideoRef.current.srcObject = stream
            setIsReady(true)
          })
    },[])

    useEffect(() => {
        if (isReady) {
          drawVideoToCanvas();
        }
      }, [isReady]);
      

      function loadModel(file) {
        return new Promise((res, rej) => {
          const loader = new GLTFLoader()
          loader.load(file, (gltf) => {
            res(gltf.scene)
          }, undefined, (error) => {
            rej(error)
          })
        })
      }
      
    const drawVideoToCanvas = () => {

          console.log("video", canvasRef.current.width, canvasRef.current.width)

        //   // Set canvas dimensions based on video or desired size
        canvasContextRef.current.save()
        //   // Clear the canvas before drawing a new frame
          canvasContextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      
          canvasContextRef.current.drawImage(inputVideoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

        // // Draw the webcam video onto the canvas
        // // Simulate transparency by manipulating alpha channel (limited effect)
        canvasContextRef.current.drawImage(overlayVideoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

        const imageData = canvasContextRef.current.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
        const data = imageData.data;
        for (let i = 3; i < data.length; i += 4) {
          data[i] -= 100; // Reduce alpha channel value (adjust for desired transparency)
        }
        canvasContextRef.current.putImageData(imageData, 0, 0);
      
          // You can further manipulate the video on the canvas here using ctx functions (optional)
          canvasContextRef.current.restore()
        // Schedule the next draw using requestAnimationFrame for smooth animation
        requestAnimationFrame(drawVideoToCanvas);
      };

    return (
        <div>
            <video id='webcam' autoPlay ref={inputVideoRef}></video>
            <video id='overlay-video' src={OverlayVideo} autoPlay loop muted ref={overlayVideoRef} type="video/mov"></video>
            <canvas ref={canvasRef} style={{position: 'absolute', left: 0, top: 0, height: '100%', width: '100%', zIndex: 5}}/>
        </div>
    );
}

export default VideoOverlay;