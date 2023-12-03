import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import pencilSound from './pencil.mp3'

const TodoContext = React.createContext();

function TodoProvider ({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('EJEMPLOS_TODOS', []);
      const [searchValue, setSearchValue] = React.useState("");
      const [openModal, setOpenModal] = React.useState(false);
      const totalTodos = todos.length;
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
    
      const searchedTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(searchValue.toLowerCase());
        }
      );

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false,
        })
        saveTodos(newTodos);
      };
    
      const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex ((todo) => todo.text === text);
        const pencilPlayer = new Audio(pencilSound)
    
        newTodos[todoIndex].completed = !todos[todoIndex].completed;
        saveTodos(newTodos);
        if (newTodos[todoIndex].completed === true) {
           pencilPlayer.play();
        }
      };
      
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex ((todo) => todo.text === text);
    
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };
    return (
        <TodoContext.Provider value={{
          completedTodos,
          totalTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodo,
          deleteTodo,
          loading,
          error,
          openModal,
          setOpenModal,
          addTodo
        }}>
          { children }
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider }