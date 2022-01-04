import { FaTrash, FaCheck } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.done ? 'done' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.title} <FaTrash style={{cursor: 'pointer'}} onClick={() => onDelete(task.id)} /></h3>
      <p>{task.comment} <FaCheck style={{cursor: 'pointer'}} onClick={() => onToggle(task.id)} /></p>
    </div>
  )
}

export default Task
