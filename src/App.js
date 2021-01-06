import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { buttonPushed, setActive } from './slice/VideoSlice';
import Stream from './stream/Stream';
import { makeStyles } from '@material-ui/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  containerStream: {
    display: ({isActive})=>(isActive?'flex':'none'),
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filter : {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    mixBlendMode: 'multiply',
    background: ({slide}) => (`hsla(0, ${slide}%, 50%, 1)`),
  },
  sliderContainer: {
    alignSelf: 'center',
    width: '80%',
    margin: '1em'
  }
})

function App() {
  const dispatch = useDispatch();
  const isActive = useSelector(state => {
   return state.active;
  })
  const [slide, setSlide] = useState(100);

  const onButtonPushed = useCallback(
    () => {
      dispatch(buttonPushed());
    },
    [dispatch],
  )
  const onCloseClick = useCallback(
    () => {
      dispatch(setActive(false));
    },
    [dispatch],
  )

  const classes = useStyles({slide, isActive});
  return (
    <>
    {!isActive && <div className="button" onClick={onButtonPushed} >PUSH</div>}
    <div className={classes.containerStream}>
         <Stream isActive={isActive} />
         {isActive && <>
        <div className={classes.filter}></div>
        <div className="close" onClick={onCloseClick}>X</div>
        <div className={classes.sliderContainer}>
          <Slider className={classes.slider} value={slide} onChange={(e, value)=>{setSlide(value)}} />
        </div>
        </>}
    </div>
    </>
  );
}

export default App;
