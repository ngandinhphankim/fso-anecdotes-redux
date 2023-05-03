import { createSlice } from "@reduxjs/toolkit";

const notificationReducer = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        setNotification(state, action) {
            return action.payload
        },
        clearNotification(state, action) {
            return null
        }
    }
})

export const { setNotification, clearNotification } = notificationReducer.actions

export const notify = (content, time = 5) => {
    return async dispatch => {
        dispatch(setNotification(content))
        setTimeout(() => {
            dispatch(clearNotification())
        }, time * 1000)
    }
}

export default notificationReducer.reducer