import React, {useState} from 'react';

const TaskInput = ({addTodo}) => {

    const [text, setTest] = useState()

    const inputChange = (e) => {
        return setTest(e.target.value)
    }

    const addTask = (e) => {
        addTodo(e)
        return setTest('')

    }

    const enterHandle = (e) => {
        if (e.key === 'Enter') {
            addTask(text)
        }
    }

    return (
        <div>
            <div className='task-input'>
                <input onChange={inputChange} onKeyPress={enterHandle} value={text}></input>
                <button onClick={() => addTask(text)} >Добавить</button>
            </div>
        </div>

    )
    
}

export default TaskInput