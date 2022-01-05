import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import gradientloop from './gradientloop_1'

console.log(gradientloop);

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'This is an example task',
      comment: 'You can delete or mark as done.',
      done: false,
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  // Toggle done
  const toggleDone = (id) => {
    setTasks(tasks.map((task) => task.id ===id ? { ...task, done : !task.done } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/> }
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleDone} />
      ) : (
        <h3>No tasks to display.</h3>
      )}
    </div>
  );
}

export default App;
