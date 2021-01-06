import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { setActive } from './Slice/VideoSlice';
import Stream from './stream/Stream';

function App() {
  const dispatch = useDispatch();
  const isActive = useSelector(state => {
   return state.active;
  })

  const activate = useCallback(
    () => {
      dispatch(setActive(true));
    },
    [dispatch],
  )
  return (
    <>
    {!isActive && <div className="button" onClick={activate} >Clicca per attivare la videocamera filtrata</div>}
    {isActive && <div className="containerStream">
         <Stream />
        <div className="filter"></div>
    </div>}
    </>
  );
}

export default App;
