import React from 'react'
import { Toaster } from 'react-hot-toast'

import { useGetTodos } from '../hooks/api/useGetTodos'
import logo from '../logo.svg'

function Home() {
  useGetTodos()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello world</h1>
      </header>
      <Toaster />
    </div>
  )
}

export default Home
