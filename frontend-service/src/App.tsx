import React, { ChangeEvent, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as api from './api';


function App() {
  
  const [email, setEmail] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [infoMessage, setInfoMessage] = useState('');
  const [availableItems, setAvailableItems] = useState<Array<string>>([]);
  
  useEffect(() => {    
    (async () => {
      const items = await api.getAvailableItems();
      setAvailableItems(items);
    })();
  }, []);
  
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem(e.target.value);
  }
  
  const getAvailableItems = () => {
    return availableItems.map(item => {
      return (
        <option key={uuidv4()} value={item}>{item}</option>
      )
    })
  }
  
  const onSubmit = async () => {
    setInfoMessage('');
    console.log(`Selected email: ${email}, selected item: ${selectedItem}`);
    const res = await api.sendOrder(email, selectedItem);
    if(res.status !== 200) {
      setInfoMessage(res.data);
      return;
    }
    await api.updateIntenvory(selectedItem);
  }
  
  return (    
    <div className='flex flex-row justify-center items-center text-white bg-gray-900 min-h-screen'>
      <div className='bg-g p-10 rounded-lg bg-blue-900'>
        <h1 className="text-3xl font-bold mb-5">
          Place order 
        </h1>
        <form className='my-2'>
          <label>
            email: <input className='text-black' type="text"  value={email} onChange={handleEmailChange}/>
          </label>
        </form>
        <div>
        <select className='w-full text-black my-2' onChange={handleSelectChange} value={selectedItem}>
          {getAvailableItems()}
        </select>
        <button 
          type='submit'
          className='w-full text-center border-2 border-white rounded-xl p-2 my-2 hover:bg-blue-700'
          onClick={onSubmit}
        > 
          Submit 
        </button>
        <div className='text-center'>
          <p className='text-xl'>{infoMessage}</p>
        </div>
      </div>
		</div>
    </div>  
  )
}

export default App;
