import React, { useEffect } from 'react'
import './App.css'
import GrandParent from './components/GrandParent'
import Parent from './components/Parent'

const App = () => {
  useEffect(() => {
    console.log('App useEffect');
  }, [])


  console.log('App.......')

  return (
    <Parent />
  )
}

export default App
