import './App.css'
import Header from './classComponents/header/Header'
import React from 'react'
import Tasks from './classComponents/tasks/Tasks'

class App extends React.Component {

  render() {
    return (
        <div className='container'>
          <Header title='Todos'/>
            <Tasks/>
        </div>
    )
  }
}
export default App
