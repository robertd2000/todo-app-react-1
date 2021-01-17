import React from 'react';

const Task = ({task, ...props}) => {

    const ActionBtn = () => {
        return (
            <div className='action-btn'>{!task.completed
                ? <p onClick={props.doneTask}>✔️</p>
                : <p onClick={props.deleteTask}>X</p>
            }</div>
        )
    }

    const className = 'task' + (task.completed ? ' task-done' : '')


    return (
        <div className={className}>
            <div className='task-content'>
                <p> 
                    {task.title}
                </p>
            </div>
            
            <ActionBtn></ActionBtn>
        </div>
    )

}

export default Task