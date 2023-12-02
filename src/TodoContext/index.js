import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider ({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('EJEMPLOS_TODOS', []);
      const [searchValue, setSearchValue] = React.useState("");
      const [openModal, setOpenModal] = React.useState(true);
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
          setOpenModal
        }}>
          { children }
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider }