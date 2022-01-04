import { useState } from 'react'

const AddTask = () => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState('')

  return (
    <form className='add-form'>
      <div className='form-control'>
      <label>Task?</label>
      <input type='text' placeholder='Add Task'/>
      </div>
      <div className='form-control'>
        <label>When?</label>
        <input type='text' placeholder='Add Time' />
      </div>
      <div className='form-control form-control-check'>
        <label>Reminder?</label>
        <input type='checkbox' />
      </div>
      <input className='btn btn-block' type='submit' value='Save Task' />
    </form>

  )
}

export default AddTask
