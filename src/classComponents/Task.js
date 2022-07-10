import React from 'react';
import { FaTimes } from 'react-icons/fa'

class Task extends React.Component {

    render() {
        return (
            <div>
                <input type='checkbox' onChange={(e) => this.props.onChecked(this.props.task.id, e.currentTarget.checked)}/>
                <input id='task-input' type='text' style={this.props.task.completed ? {textDecorationLine: 'line-through', color: 'gray'}: {}} value={this.props.task.text} onChange={(e) => this.props.onChange(e, this.props.task.id)} />
                <FaTimes onClick={() => this.props.onDelete(this.props.task.id)}/>
            </div>
        )
    }
}


export default Task