import './App.css'
import Header from './components/header/Header'
import React from 'react'
import Tasks from './components/tasksFunction/Tasks'

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
