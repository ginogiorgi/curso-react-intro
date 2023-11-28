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

  return (
    <>

      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
