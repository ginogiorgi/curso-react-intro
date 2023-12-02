import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import "../TodoCounter/TodoCounter.css"

function AppUI({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
  loading,
  error,
}) {
    return (
      <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {loading && <p className='TodoCounter initialMessege'>Estamos cargando...</p>}
        {error && <p className='TodoCounter'>Hubo un error!</p>}

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

export { AppUI }