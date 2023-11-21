import logo from './Kono_Aqua.png';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoItem />
      <TodoItem />
      <TodoItem />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Puto el que lee
        </p>
      </header>
    </div>
  );
}

function TodoItem() {
  return(
    <li>
      <span>V</span>
      <p>Ir a Mar del Plata</p>
      <span>X</span>
    </li>
  );
}

export default App;
