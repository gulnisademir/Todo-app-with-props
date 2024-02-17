import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

function TodoWrapper() {
    const [tasks, setTasks] = useState([])

    const addTodos = (todo) => {
        setTasks(prev => [...prev, {id:uuidv4(),title: todo,
        completed: false, isEditing: false }])
    }
    console.log(tasks)


    const toggleComplete = id => {
      setTasks(tasks.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
    }

    const deleteTodo = id => {
      setTasks(tasks.filter(todo => todo.id !== id ))
    }

    const editTodo = (id) => {
      setTasks(tasks.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo ))
    }

    const editTask = (title,id) => {
      setTasks(tasks.map(todo => todo.id === id ? {...todo, title, isEditing: !todo.isEditing} : todo ))
    }

  return (
    <div className="TodoWrapper">
    <TodoForm addTodos = {addTodos}/>
    {tasks.map((item, index )=> 
    item.isEditing ? (
      <EditTodoForm key={index} editTodo={editTask} tasks={item}/>
    ): (
      <Todo task = {item} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
    )
    )}
    </div>
  )
}

export default TodoWrapper