import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    comments: []
}

const comment = createSlice({
    name: 'vote',
    initialState,
    reducers: {
        setComments: (state, action) => {
            state.comments = action.payload
        }
    }
})

export const { setComments } = comment.actions
export default comment.reducer