import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'

function AnecdoteList() {
    const state = useSelector(({anecdotes, filter}) => {
        if (filter == 'ALL') {
            return anecdotes
        }
        return [...anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))]
    })
    
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(voteFor(id))
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
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList     