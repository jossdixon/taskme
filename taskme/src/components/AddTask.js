import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [comment, setComment] = useState('')
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!title) {
      alert('Please add a task')
      return
    }

    onAdd({ title, comment, done })

    setTitle('')
    setComment('')
    setDone(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit} >
      <div className='form-control'>
      <label>What do you need to do today?</label>
      <input
        type='text'
        placeholder='e.g. Phone a friend'
        value={title}
        onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Add a comment...</label>
        <input
        type='text'
        placeholder='e.g. At 2pm'
        value={comment}
        onChange={(e) => setComment(e.target.value)} />
      </div>
      {/* <div className='form-control form-control-check'>
        <label>Reminder?</label>
        <input
        type='checkbox'
        value={reminder}
        checked={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)}  />
      </div> */}
      <input className='btn btn-block' type='submit' value='Save Task' />
    </form>

  )
}

export default AddTask
