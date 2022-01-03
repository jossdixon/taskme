import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Tennis',
      day: 'January 5th at 10:00',
      reminder: false,
    },
    {
      id: 2,
      text: 'Dentist',
      day: 'January 7th at 14:30',
      reminder: true,
    },
    {
      id: 3,
      text: 'Interview',
      day: 'January 9th at 11:00',
      reminder: true,
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id ===id ? { ...task, reminder : !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show!"
      )}
    </div>
  );
}

export default App;
