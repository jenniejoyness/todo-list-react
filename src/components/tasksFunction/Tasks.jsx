import Task from '../task/Task'
import React, {useState} from 'react'
import Button from '../button/Button'

function Tasks () {
    const [counter, setCounter] = useState(1)
    const [taskList, setTaskList] = useState({
        1: {
            id: 1,
            text: '',
            completed: false
        }
    })
    const [uncompletedLength, setUncompletedLength] = useState(1)

    const onDelete = (task) => {
        const newTaskList = taskList
        delete newTaskList[task.id]
        setTaskList({...newTaskList})
        if (!task.completed) {
            setUncompletedLength(uncompletedLength => uncompletedLength - 1)
        }
    }

    const onAdd = () => {
        const id = counter + 1
        const newTask = { id, completed: false, text: '' }

        setTaskList(taskList => ({...taskList, [id]: newTask }))
        setUncompletedLength(uncompletedLength => uncompletedLength + 1)
        setCounter(counter => counter + 1)
    }

    const onChange = ({ id, value }) => {
        const task = taskList[id]
        setTaskList({ ...taskList, [id]: {...task, text: value}})
    }

    const onCheck = ({ id, checked }) => {
        const newTaskList = taskList
        newTaskList[id].completed = !taskList[id].completed
        setTaskList(newTaskList)
        setUncompletedLength(uncompletedLength => checked ? uncompletedLength - 1 : uncompletedLength + 1)
    }



    const onKeyChange = ({e, task }) => {
        if (e.key === 'Enter' && task.id === counter) {
            onAdd()
        }
        if (e.key === 'Backspace' && taskList[task.id].text === '') {
            onDelete(task)
        }
    }

    return (
        <>
            <div className='task-count'>{uncompletedLength ? `There is ${uncompletedLength} tasks left` : 'Add more todos!' }</div>
            <Button text='Add todo' onClick={onAdd}/>
            <div className='todo-container'>
                {Object.keys(taskList).map(taskId => {
                    return (
                        <Task
                            key={taskId}
                            task={taskList[taskId]}
                            onDelete={onDelete}
                            onChange={onChange}
                            onCheck={onCheck}
                            onKeyChange={onKeyChange}
                        >{taskList[taskId]}</Task>
                    )
                })}
            </div>
        </>
    )
}

export default Tasks