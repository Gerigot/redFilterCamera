import React, { useEffect, useRef } from 'react'
import './Stream.css';

const getStreams = async () => {
    const constraints = {
        audio: false, 
        video: {
            facingMode: 'environment'
        }
    };
    const streams = await navigator.mediaDevices.getUserMedia(constraints);
    return streams;
}


export default function Stream({isActive}) {
    const videoEl = useRef(null);
    useEffect(() => {
        if(isActive){
            const openStream = async () => {
                const streams = await getStreams();
                if(videoEl){
                    videoEl.current.srcObject = streams;
                }
            }
            openStream()
        }else{
            if(videoEl.current && videoEl.current.srcObject){
                videoEl.current.srcObject.getTracks().forEach(function(track) {
                    console.log(track);
                    track.stop();
                })
                videoEl.current.srcObject = null;
            }
        }

        return ()=>{}
    }, [isActive])
    
    return (
        <video ref={videoEl} className={`stream${!isActive ? ' hide': ''}`} playsInline autoPlay></video>
    )
}
