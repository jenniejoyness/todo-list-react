import Task from '../task/Task'
import React from 'react'
import Button from '../button/Button'

class Tasks extends React.Component {
    state = {
        counter: 1,
        taskList: {
            1: {
                id: 1,
                text: '',
                completed: false
            }
        },
        uncompletedLength: 1
    }

    onDelete = (task) => {
        const newState = this.state
        const uncompletedLength = task.completed ? newState.uncompletedLength : newState.uncompletedLength - 1
        delete newState.taskList[task.id]
        newState.uncompletedLength = uncompletedLength
        this.setState(newState)
    }

    onAdd = () => {
        const newState = this.state
        const uncompletedLength = newState.uncompletedLength + 1
        const counter = this.state.counter + 1
        const id = counter

        newState.taskList[id] = { id, completed: false, text: '' }
        newState.counter = counter
        newState.uncompletedLength = uncompletedLength

        this.setState(newState)
    }

    onChange = ({ id, property, value }) => {
        const newState = this.state
        if (property === 'completed') {
            newState.uncompletedLength = value ? newState.uncompletedLength -1 : newState.uncompletedLength + 1
        }
        newState.taskList[id][property] = value

        this.setState(newState)
    }


    onKeyChange = ({e, task }) => {
        if (e.key === 'Enter' && task.id === this.state.counter) {
            this.onAdd()
        }
        if (e.key === 'Backspace' && this.state.taskList[task.id].text === '') {
            this.onDelete(task)
        }
    }

    render() {
        return (
            <>
                <div className='task-count'>{this.state.uncompletedLength ? `There is ${this.state.uncompletedLength} tasks left` : 'Add more todos!' }</div>
                <Button text='Add todo' onClick={this.onAdd}/>
                <div className='todo-container'>
                    {Object.keys(this.state.taskList).map(taskId => {
                        return (
                            <Task
                                key={taskId}
                                task={this.state.taskList[taskId]}
                                onDelete={this.onDelete}
                                onChange={this.onChange}
                                onKeyChange={this.onKeyChange}
                            >{this.state.taskList[taskId]}</Task>
                        )
                    })}
                </div>
            </>

        )
    }
}

export default Tasks