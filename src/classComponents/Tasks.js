import Task from './Task'
import React from 'react'

class Tasks extends React.Component {
    render() {
        return (
            <div>
                {this.props.taskList.map(task => {
                    return (
                        <Task
                            key={task.id}
                            task={task}
                            onDelete={this.props.onDelete}
                            onChange={this.props.onChange}
                            onChecked={this.props.onChecked}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Tasks