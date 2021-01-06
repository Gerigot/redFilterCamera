import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useRef } from 'react'

const useStyles = makeStyles({
    stream: {
        display: ({isActive}) => (isActive?'block': 'none'),
        width: '100%',
        border: '1px solid red',
      }
  })

const getStreams = async () => {
    const constraints = {
        audio: false, 
        video: {
            facingMode: 'environment'
        }
    };
    try {
        
        const streams = await navigator.mediaDevices.getUserMedia(constraints);
        return streams;
    } catch (error) {
        alert(error);
       return null; 
    }   
}


export default function Stream({isActive}) {
    const classes = useStyles({isActive});
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
        <video ref={videoEl} className={classes.stream} playsInline autoPlay></video>
    )
}
