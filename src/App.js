import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'
import React from 'react'

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Ir a Mar del Plata', completed: false},
  {text: 'Comer panchitos', completed: false},
  {text: 'Ver anime', completed: true},
  {text: 'Ordenar pieza', completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    }
  );
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex ((todo) => todo.text == text);
    
    newTodos[todoIndex].completed = !todos[todoIndex].completed;
    setTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex ((todo) => todo.text == text);

    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <>

      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed} 
          onComplete={() => {completeTodo(todo.text)}}
          onDelete = {() => {deleteTodo(todo.text)}}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
