import { useState } from 'react';
import Display from './counterDisplay';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncreament = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className='grid h-screen place-items-center'>
      <div className='bg-gray-200 border p-4 rounded-md'>
        <Display heading="Counter Display" countDisplay={count}/>
        <div className='flex flex-col md:flex-row'>
          <button  type='button'  onClick={handleIncreament}   className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 md:mb-0' > Increment  </button>

          <button  type='button'  onClick={handleDecrement}   className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 md:mb-0'>  Decrement  </button>

          <button  type='button'  onClick={handleReset}   className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 md:mb-0' > Reset </button>
        </div>
      </div>
    </div>
  );
}
