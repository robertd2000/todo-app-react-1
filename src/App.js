import React, {useState, useEffect} from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';

const App = () => {
  // const [todo, setTodo] = useState([
  //   {id: 0, title: 'Buy bread', completed: false},
  //   {id: 1, title: 'Buy bear', completed: false},
  //   {id: 2, title: 'Buy milk', completed: false},
  // ])   

    const [todo, setTodo] = useState(window.localStorage.getItem('items') ? JSON.parse(window.localStorage.getItem('items')) : [])   

    const doneTask = (id) => {
      const index = todo.map(i => i.id).indexOf(id)
      console.log(todo[index]);
      const todoPrev = todo.filter(i => i.id !== id)
      const todoCurrent = todo.filter(i => i.id === id)
      todoCurrent[0].completed = true
      window.localStorage.setItem('items', JSON.stringify([...todoPrev, ...todoCurrent]));


      return setTodo(() => {
        // todo[index].completed = true

        return [
          ...todoPrev,
          ...todoCurrent
        ]
      })

    }

    const deleteTask = (id) => {
      // const index = todo.map(i => i.id).indexOf(id)
      const todoPrev = todo.filter(i => i.id !== id)
      window.localStorage.setItem('items', JSON.stringify(todoPrev));

      return setTodo(() => {
        return [
          ...todoPrev,
        ]
      })

    }

    const addTodo = (text) => {
      const newTodo = {
        title: text,
        completed: false,
        id: Math.floor(Math.random() * 1000)
      }
      const updatedItems = [...todo, newTodo]
      console.log(todo);

      window.localStorage.setItem('items', JSON.stringify(updatedItems));
      return setTodo(prev => {
        return [
          ...prev,
          newTodo
        ]
      })
    }

    return (
      <div className='App'>
        <div>
          <TaskInput addTodo={addTodo}/>
          {todo.map(item => {
            return <Task 
            key={item.id} 
            task={item} 
            doneTask={() => doneTask(item.id)}
            deleteTask={() => deleteTask(item.id)}
            />
          })}
        </div>
      </div>
    )
  }


export default App;
