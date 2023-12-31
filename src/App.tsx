import {useState} from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';


function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  //const todos = [ new Todo('Learn React'), new Todo('Learn TypeScript'), new Todo('Learn DSA'),new Todo('Learn HTML')]

  const addTodoHandler = (todoText: string) => {
const newTodo = new Todo(todoText);

setTodos((prevTodos) => {
  return prevTodos.concat(newTodo)
})
  }

  const removeTodoHandler = (todoId: string) => {

    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <>
    <NewTodo onAddTodo={addTodoHandler}/>
   <Todos items={todos} onRemoveTodoFromTodoItem={removeTodoHandler}/>
   </>
  );
}

export default App;
