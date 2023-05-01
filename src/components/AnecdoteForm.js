import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNew } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'

function AnecdoteForm() {
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const handleCreate = async (e) => {
    e.preventDefault()
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(addNew(newAnecdote))
    setContent('')
  }

  return (
        <div>
            <h2>create new</h2>
            <form onSubmit={handleCreate}>
                <div><input value={content} onChange={({ target }) => setContent(target.value)} /></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm