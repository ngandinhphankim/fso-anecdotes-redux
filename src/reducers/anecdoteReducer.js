import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    updateAnecdote(state, action) {
      const votedAnecdote = action.payload
      return state.map(anecdote => anecdote.id !== votedAnecdote.id ? anecdote : votedAnecdote)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { updateAnecdote, setAnecdotes, appendAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const addNew = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteFor = anecdoteToVote => {
  return async dispatch => {
    const anecdoteToUpdate = {
      ...anecdoteToVote,
      votes: anecdoteToVote.votes + 1
    }
    const votedAnecdote = await anecdoteService.updateOne(anecdoteToUpdate)
    dispatch(updateAnecdote(votedAnecdote))
  }
}

export default anecdoteSlice.reducer