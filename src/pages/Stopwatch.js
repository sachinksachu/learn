import React, { useState, useRef, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLocation, useNavigate, useParams } from "react-router-dom";

function Stopwatch() {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);
  //use to navigate
  const navigate = useNavigate();

///20mb glb
  // const modelUrl = 'https://storageinstaxcommondev.blob.core.windows.net/instax-test-container/AntiqueCamera.glb?sp=r&st=2024-09-10T10:45:34Z&se=2024-12-31T18:45:34Z&spr=https&sv=2022-11-02&sr=b&sig=5m9z%2F17qg4BSeAmOV1pZiqDg%2F0sKN3aSoCXxIjz3HjE%3D'
  
  // 300 kb glb
//   const modelUrl = 'https://storageinstaxcommondev.blob.core.windows.net/instax-test-container/CatEyeGlasses.glb?sp=r&st=2024-09-19T07:10:19Z&se=2024-09-19T15:10:19Z&spr=https&sv=2022-11-02&sr=b&sig=shx4VCiQEog0f6KyBvw%2Beb07gHJ9lHowrlKiwTvpirw%3D'
  
// 3d model 770KB
//   const modelUrl = 'https://storageinstaxcommondev.blob.core.windows.net/instax-test-container/HeartGlass_770.glb?sp=r&st=2024-09-19T07:39:16Z&se=2024-09-19T15:39:16Z&spr=https&sv=2022-11-02&sr=b&sig=TZeeVsfsDg%2BnSuO62tbYP74RZiVZtuGae7UKe31lqrQ%3D'
  
// 3d model Cars 1.09MB
const modelUrl1 = 'https://storageinstaxcommondev.blob.core.windows.net/instax-test-container/Cars.glb?sp=r&st=2024-09-19T08:43:59Z&se=2024-09-19T16:43:59Z&spr=https&sv=2022-11-02&sr=b&sig=dZWRQ%2F8SgQ4OD%2B3NJBB1pJD7IaN5uX%2FU8l2ll2WzDS4%3D'

//3D model house 1.4 MB
const modelUrl2 = 'https://storageinstaxcommondev.blob.core.windows.net/instax-test-container/house_1_4MB.glb?sp=r&st=2024-09-19T08:51:21Z&se=2024-09-19T16:51:21Z&spr=https&sv=2022-11-02&sr=b&sig=V1ugdfoRByeqm8BCoBxzFp7kQlxBAafi7t%2BwlRDkh4U%3D'

// 3D model Bucket - 2.2MB
const modelUrl3 = 'https://storageinstaxcommondev.blob.core.windows.net/instax-test-container/old_bucket_2mb.glb?sp=r&st=2024-09-19T09:06:36Z&se=2024-09-19T17:06:36Z&spr=https&sv=2022-11-02&sr=b&sig=b%2BljSKDgO2sH2ts1L3VlS2MxlbcLz485Wg21oo4dR74%3D'


  // bottle glb 8.5 Mb
//   const modelUrl = 'https://storageinstaxcommondev.blob.core.windows.net/instax-test-container/bottle.glb?sp=r&st=2024-09-19T07:14:37Z&se=2024-09-19T15:14:37Z&spr=https&sv=2022-11-02&sr=b&sig=22h0hv%2FbwdN3AA%2FUYWJksaxtnY7F%2FvPcPG%2FeK6el0dU%3D'
  
  // image 89Kb
  // const modelUrl = 'https://storageinstaxcommondev.blob.core.windows.net/instax-test-container/pic.jpeg?sp=r&st=2024-09-19T05:55:32Z&se=2024-11-01T13:55:32Z&spr=https&sv=2022-11-02&sr=b&sig=LRVsoG%2FWIDzNhKQ8jMs4pG6GDhMUYOILtGJ0cnkf6s0%3D'
  useEffect(()=>{
    loadModel(modelUrl1)
    loadModel(modelUrl2)
    loadModel(modelUrl3)
  },[])

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

// function loadModel(file){
//     fetch(file, {
//       mode : 'no-cors',
//     })
//       .then(response => response.blob())
//   }

function startTimer(){

    clearInterval(timerRef.current);
    timerRef.current = setInterval(()=>{

        setTimer((prevTimer) => prevTimer + 1)
    },1000)
    
    console.log("ref",timerRef)
}

const stopTimer = () =>{
    clearInterval(timerRef.current);
}

const resetTimer = () =>{
    clearInterval(timerRef.current);
    setTimer(0)
}


    const onButtonClick = (param) => {
        switch (param) {
            case 0:
                startTimer();
                break;
            case 1:
                stopTimer();
                break;
            case 2:
                resetTimer();
                break;
            default:
                break;
        }
    }

  return (
    <div className="">
        <h1>Stopwatch {timer}</h1>
        <button type="button" onClick={()=>  onButtonClick(0)}>start</button>
        <button type="button"  onClick={()=> onButtonClick(1)}>stop</button>
        <button type="button"  onClick={()=> onButtonClick(2)}>reset</button>
        <img src='../../pic.jpeg' alt='lo' width={'100px'} height={'100px'}/>
        <button type="button" onClick={() => navigate('/productId/1234')}>Product</button>
        
    </div>
  );
}

export default Stopwatch;
