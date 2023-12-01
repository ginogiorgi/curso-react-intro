import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { useLocalStorage } from './useLocalStorage'
import React from 'react'

function App() {
  const [todos, saveTodos] = useLocalStorage('EJEMPLOS_TODOS', []);
  const [searchValue, setSearchValue] = React.useState("");
  const totalTodos = todos.length;

  const completedTodos = todos.filter(todo => !!todo.completed).length;

  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex ((todo) => todo.text === text);
    
    newTodos[todoIndex].completed = !todos[todoIndex].completed;
    saveTodos(newTodos);
  };
  
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex ((todo) => todo.text === text);

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

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
};

export default App;