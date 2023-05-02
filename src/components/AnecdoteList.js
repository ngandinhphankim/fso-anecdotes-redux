import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

function AnecdoteList() {
    const state = useSelector(({anecdotes, filter}) => {
        if (filter == 'ALL') {
            return anecdotes
        }
        return [...anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))]
    })
    
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(voteFor(anecdote))
        dispatch(notify(`You voted '${anecdote.content}'`))
    }
    return (
        <div>
            <h2>Anecdotes</h2>
            {[...state].sort((a, b) => b.votes - a.votes).map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList     