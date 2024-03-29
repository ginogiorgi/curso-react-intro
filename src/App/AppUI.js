import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { TodoContext } from '../TodoContext'
import { TodoForm } from '../TodoForm'
import React from 'react'
import { Modal } from '../Modal'

function AppUI() {
  const {openModal, setOpenModal, searchedTodos, completeTodo, deleteTodo, loading, error} = React.useContext(TodoContext)
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
      <CreateTodoButton setOpenModal={setOpenModal}/>
      {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )
      }
    </>
    );
};

export { AppUI }