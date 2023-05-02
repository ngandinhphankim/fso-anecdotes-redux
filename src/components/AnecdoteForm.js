import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNew } from '../reducers/anecdoteReducer'

function AnecdoteForm() {
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const handleCreate = async (e) => {
    e.preventDefault()
    dispatch(addNew(content))
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