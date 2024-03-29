import React from 'react'
import { useState } from 'react'
const AddTask = ({onAdd}) => {
    const [text, setText]=useState("");
    const [day, setDay]=useState("");
    const [reminder, setReminder]=useState(false);

    const onSubmit =(e)=>{
    e.preventDefault();
    if(!text){
        alert("Please add a Task")
        return
    }

    onAdd({text,day,reminder});

    setText('');
    setDay('');
    setReminder(false );

    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input onChange={(e)=>setText(e.target.value)} value={text} type="text" placeholder='Add Task' />
      </div>
      <div className='form-control'>
        <label>Day And Time</label>
        <input onChange={(e)=>setDay(e.target.value)} value={day} type="text" placeholder='Add Day &  Time' />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder:</label>
        <input checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}  type="checkbox" />
      </div>
      <input className='btn btn-block' type='submit'  value="save"/>
    </form>
  )
}

export default AddTask
