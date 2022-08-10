import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    votes: []
}

const votes = createSlice({
    name: 'vote',
    initialState,
    reducers: {
        setVotes: (state, action) => {
            state.votes = action.payload
        },
        appendVote: (state, action) => {
            state.votes = [...state.votes, action.payload]
        },
        answer1: (state, action) => {
            state.votes = [...state.votes, action.payload]
        },
        answer2: (state, action) => {
            state.votes = [...state.votes, action.payload]
        },
        answer3: (state, action) => {
            state.votes = [...state.votes, action.payload]
        },
        answer4: (state, action) => {
            state.votes = [...state.votes, action.payload]
        },
       
    }
})

export const { setVotes, appendVote } = votes.actions
export default votes.reducer