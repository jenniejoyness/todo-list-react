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
        const newUncompletedLength = task.completed ? uncompletedLength : uncompletedLength - 1
        delete newTaskList[task.id]
        setTaskList(newTaskList)
        setUncompletedLength(newUncompletedLength)
    }

    const onAdd = () => {
        const newTaskList = taskList
        const newUncompletedLength = uncompletedLength + 1
        const newCounter = counter + 1
        const id = newCounter

        newTaskList[id] = { id, completed: false, text: '' }
        setTaskList(newTaskList)
        setUncompletedLength(newUncompletedLength)
        setCounter(newCounter)
    }

    const onChange = ({ id, value }) => {
        const task = taskList[id]
        setTaskList({ ...taskList, [id]: {...task, text: value}})
    }

    const onCheck = ({ id, checked }) => {
        const newTaskList = taskList
        newTaskList[id].completed = !taskList[id].completed
        setTaskList(newTaskList)
        const newUncompletedLength = checked ? uncompletedLength - 1 : uncompletedLength + 1
        setUncompletedLength(newUncompletedLength)
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