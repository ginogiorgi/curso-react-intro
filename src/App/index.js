import { useLocalStorage } from "./useLocalStorage"
import { AppUI } from "./AppUI"
import React from 'react';

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   {text: "Cortar cebolla", completed: false},
//   {text: "Ir a la comicon", completed: true},
//   {text: "Cortar pasto", completed: false},
//   {text: "Hacer tareas de la UTN", completed: true},
//   {text: "Mirar cualquier película que no sea el señor de los anillos!", completed: false},
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))


function App() {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI 
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    loading={loading}
    error={error}
    />
  )
};

export default App;