import React, { useState } from 'react'

function EditTodoForm({editTodo, tasks}) {
  const [newItem, setNewItem] = useState(tasks.title)

    const handleSubmit = (e) => {
        e.preventDefault()
        editTodo(newItem, tasks.id)
        setNewItem("")
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text"
                className='todo-input'
                placeholder='Update Task'
                onChange={(e) => setNewItem(e.target.value)}
                value={newItem}
            />
            <button type='submit' className='todo-btn' >Update Task</button>
        </form>
    )

}

export default EditTodoForm