import React, { useEffect, useState } from 'react'

const Pota = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Pota useEffect');


    return () => {
      console.log('Pota says i am dying');
    }
  }, [])

  const updateCounter = () => {
    setCounter(counter + 1);
  }

  console.log('Pota....');
  return (
    <div className='p-[50px] bg-red-500 text-center text-[28px] text-white'>
        {counter}
        <br />
        <button onClick={updateCounter}>click me</button>
    </div>
  )
}

export default Pota
