import './App.css'
import Header from './classComponents/Header'
import React from 'react'
import Tasks from './classComponents/Tasks'
import Button from "./classComponents/Button";

class App extends React.Component {
    state = {
        taskList: [
            {
                id: 1,
                text: '',
                completed: false
            }
        ],
        uncompletedLength: 0
    }

    calculateUncompleted = () => {
        const uncompletedLength = this.state.taskList.filter(task => !task.completed && task.text !== '')
        this.setState(state => {
            return {...state, uncompletedLength: uncompletedLength.length}
        })
    }

    onDelete = async (id) => {
        await this.setState(state => {
            return { ...state, taskList: state.taskList.filter(task => task.id !== id)}
        }, () => console.log(this.state))

        this.calculateUncompleted()
    }

    onAdd = async () => {
        await this.setState(state => {
            const id = Math.floor(Math.random() * 1000) + 1

            return {...state, taskList: [...state.taskList, { id, text: '', completed: false}]}
        }, () => console.log(this.state))

        this.calculateUncompleted()
    }

    onChange = (e, id) => {
        this.setState(state => {
            state.taskList.forEach(task => {
                if (task.id ===id){
                    task.text = e.target.value
                }
            })
            return state
        })
        this.calculateUncompleted()
    }

    onChecked = async (id, checked) => {
        await this.setState(state => {
            state.taskList.forEach(task => {
                if (task.id === id){
                    task.completed = checked
                }
            })
            return state
        })
        this.calculateUncompleted()

    }

  render() {
    return (
        <div className='container'>
          <Header title='Todos'/>
            <Tasks taskList={this.state.taskList} onDelete={this.onDelete} onChange={this.onChange} onChecked={this.onChecked}/>
            <div className='task-count'>{this.state.uncompletedLength ? `There is ${this.state.uncompletedLength} tasks left` : 'Add more todos!' }</div>
            <Button text='Add task' onClick={this.onAdd}/>
        </div>
    )
  }
}
export default App
