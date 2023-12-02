import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { TodoContext } from '../TodoContext'
import React from 'react'

function AppUI() {
  const {searchedTodos, completeTodo, deleteTodo, loading, error} = React.useContext(TodoContext)
    return (
      <>
      <TodoCounter />
      <TodoSearch />
          <TodoList>
            {loading && <>
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
            </>}
            {error && <TodosError />}
        
            {searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed} 
                onComplete={() => {completeTodo(todo.text)}}
                onDelete = {() => {deleteTodo(todo.text)}}/>
              ))
            }
          </TodoList>
      <CreateTodoButton />
    </>
    );
};

export { AppUI }