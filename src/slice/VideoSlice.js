import {createAction, createSlice} from '@reduxjs/toolkit';

const VideoSlice = createSlice({
    name: "video",
    initialState: {
        hue: 0,
        active: false
    },
    reducers: {
        changeHue: (state, {payload}) =>{
            state.hue = payload
        },
        setActive: (state, {payload}) => {
            state.active = payload
        }

    }
})

const {actions, reducer} = VideoSlice;

//custom actions
export const buttonPushed = createAction("PUSHED");

export const {changeHue, setActive} = actions

export default reducer;