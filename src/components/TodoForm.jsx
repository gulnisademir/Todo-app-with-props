import React, { useState } from 'react'

function TodoForm({ addTodos }) {

    const [newItem, setNewItem] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newItem) {
            addTodos(newItem)
            setNewItem("")
        }

    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text"
                className='todo-input'
                placeholder='What is the task today?'
                onChange={(e) => setNewItem(e.target.value)}
                value={newItem}
            />
            <button type='submit' className='todo-btn' >Add Task</button>
        </form>
    )
}

export default TodoForm