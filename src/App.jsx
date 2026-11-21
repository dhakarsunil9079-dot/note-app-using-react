import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    if (!title.trim() && !details.trim()) {
      return
    }
    const copyTask = [...task]
    copyTask.push({title,details})
    setTask(copyTask)
    setTitle('')
    setDetails('')
    
  }

  const deleteNote = (idx) =>{
  const copyTask = [...task]
  copyTask.splice(idx,1)
  setTask(copyTask)
  }
  
  return (
    <div className='h-screen bg-black text-white flex' >
      <form  onSubmit={(e) =>{
        submitHandler(e);
      }} className='flex flex-col gap-4 p-10 w-1/3 border-r-2'>

        <h1 className='text-3xl font-bold' >Add Notes</h1>

       <input 
       className='px-5 py-2 text-2xl outline-none border-2 rounded' 
       type="text"
       value ={title}
        onChange={(e) => { 
          setTitle(e.target.value)
         }}
       placeholder='Enter notes Heading' />

       <textarea  
       className='px-5 w-full h-32 text-lg py-2 outline-none border-2 rounded' 
       type="text"
       value={details}
       onChange={(e) => {
      setDetails(e.target.value)
       }}
       placeholder='Write Details'
       ></textarea>

       <button className='bg-white outline-none text-black font-semibold text-2xl rounded px-5 py-2  active:bg-gray-300 active:scale-97'>Submit</button>

      </form>

    <div className='flex flex-col flex-1 p-10 border-l-2 overflow-hidden'>
      <h1 className='text-3xl font-bold' >Your Notes ({task.length})</h1>
      <div className='flex flex-wrap gap-5 items-start mt-6 overflow-auto flex-1'>
       {task.map(function(elem,idx){
        return <div key={idx} className='h-53 w-43  rounded-xl  bg-white text-black p-4 flex justify-between flex-col items-start relative'> 
        <div>
          <h3 className='leading-tight font-bold text-xl'>{elem.title}</h3>
        <p className='mt-4 leading-tight text-gray-400 font-medium'>{elem.details}</p>
        </div>
        <button  onClick={() =>{
          deleteNote(idx)
        }} 
        className='w-full bg-red-700 py-1 text-xs rounded font-bold text-white cursor-pointer active:scale-95'>delete</button>
        </div>
       })}
      </div>
    </div>

    </div>
  )
}

export default App
