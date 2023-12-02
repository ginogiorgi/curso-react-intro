import { useLocalStorage } from './useLocalStorage'
import React from 'react'
import { AppUI } from "./AppUI"

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

  console.log("1");

  return (
    <AppUI 
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
};

export default App;