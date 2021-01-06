import React, { useEffect, useRef, useState } from 'react'
import './Stream.css';

export default function Stream() {
    const videoEl = useRef(null);
    const [stream, setStream] = useState(undefined)

    useEffect(() => {
        const openStream = async () => {
            const constraints = {
                audio: false, 
                video: {
                    facingMode: 'environment'
                }
            };
            const streams = await navigator.mediaDevices.getUserMedia(constraints);
            setStream(streams);
            if(videoEl){
                videoEl.current.srcObject = streams;
            }
        }
        openStream()
        return () => {
            stream && stream.getTracks().forEach(function(track) {
                track.stop();
            });
        }
        // eslint-disable-next-line
}, [])

    return (
        <video ref={videoEl} className="stream" playsInline autoPlay></video>
    )
}
