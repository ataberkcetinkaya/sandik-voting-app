import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    voteArray: []
}

const votesSlice = createSlice({
    name: 'vote',
    initialState,
    reducers: {
        getVotes: (state, action) => {
            state.voteArray = action.payload
        },
    }
})

export const { getVotes } = votesSlice.actions
export default votesSlice.reducer