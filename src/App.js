import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { buttonPushed, setActive } from './slice/VideoSlice';
import Stream from './stream/Stream';

function App() {
  const dispatch = useDispatch();
  const isActive = useSelector(state => {
   return state.active;
  })

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
  return (
    <>
    {!isActive && <div className="button" onClick={onButtonPushed} >PUSH</div>}
    <div className={`containerStream${!isActive ? ' hide': ''}`}>
         <Stream isActive={isActive} />
         {isActive && <>
        <div className="filter"></div>
        <div className="close" onClick={onCloseClick}>X</div>
        </>}
    </div>
    </>
  );
}

export default App;
