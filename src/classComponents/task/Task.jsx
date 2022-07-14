import React from 'react';
import { FaTimes } from 'react-icons/fa'

export const Task = (props) => {
    return (
        <div>
            <input type='checkbox'
                   onChange={(e) => props.onChange({
                       id: props.task.id,
                       property: 'completed',
                       value: e.currentTarget.checked
                   })}
            />
            <input id='task-input' type='text' autoFocus
                   placeholder='Write a todo...'
                   style={props.task.completed ? {textDecorationLine: 'line-through', color: 'gray'}: {}}
                   value={props.task.text}
                   onChange={(e) => props.onChange({
                    id: props.task.id,
                    property: 'text',
                    value: e.target.value
                })}
                   onKeyDown={(e) =>props.onKeyChange({e, task: props.task})}
            />
            <FaTimes onClick={() => props.onDelete(props.task)}/>
        </div>
    )
}


export default Task