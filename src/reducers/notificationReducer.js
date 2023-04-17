import { createSlice } from "@reduxjs/toolkit";

const notificationReducer = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        notify(state, action) {
            return action.payload
        },
        reset(state, action) {
            return null
        }
    }
})

export const { notify, reset } = notificationReducer.actions
export default notificationReducer.reducer