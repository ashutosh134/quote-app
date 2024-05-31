import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import ListGroup from './components/ListGroup'
import Quote from './components/Quote'

const App = () => {
  return (
    <>

      <Navbar/>
      <div className="container">
      <Quote/>
      <Form/>
      <ListGroup/>
      </div>

      
    </>
  )
}

export default App
