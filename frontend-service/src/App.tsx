import React, { ChangeEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [name, setName] = useState('');
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  
  const getAvailableItems = () => {
    const dummyList = ['item1', 'item2', 'item3'];
    return dummyList.map(item => {
      return (
        <option key={uuidv4()} value={item}>{item}</option>
      )
    })
  }
  
  return (    
    <div className='flex flex-row justify-center items-center text-white bg-gray-900 min-h-screen'>
      <div className='bg-g p-10 rounded-lg bg-blue-900'>
        <h1 className="text-3xl font-bold mb-5">
          Place order 
        </h1>
        <form className='my-2'>
          <label>
            email: <input type="text"  value={name} onChange={handleChange}/>
          </label>
        </form>
        <div>
        <select className='w-full text-black my-2'>
          {getAvailableItems()}
        </select>
        <button 
          type='submit'
          className='w-full text-center border-2 border-white rounded-xl p-2 my-2 hover:bg-blue-700'
        > 
          Submit 
        </button>
      </div>
		</div>
    </div>  
  )
}

export default App;
