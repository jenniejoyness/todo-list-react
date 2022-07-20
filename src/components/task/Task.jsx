import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = (props) => {
    return (
        <div>
            <input type='checkbox'
                   onChange={(e) => props.onCheck({
                       id: props.task.id,
                       checked: e.currentTarget.checked
                   })}
            />
            <input id='task-input' type='text'
                   placeholder='Write a todo...'
                   style={props.task.completed ? {textDecorationLine: 'line-through', color: 'gray'}: {}}
                   value={props.task.text}
                   onChange={(e) => props.onChange({
                    id: props.task.id,
                    value: e.target.value
                })}
                   onKeyDown={(e) =>props.onKeyChange({e, task: props.task})}
            />
            <FaTimes onClick={() => props.onDelete(props.task)}/>
        </div>
    )
}

export default Task