import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Ir a Mar del Plata', completed: false},
  {text: 'Comer panchitos', completed: false},
  {text: 'Ver anime', completed: true},
  {text: 'Ordenar pieza', completed: false},
]

function App() {
  return (
    <>

      <TodoCounter completed={16} total={25}/>
      <TodoSearch />
      
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
