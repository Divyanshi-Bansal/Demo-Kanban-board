import './App.css';
import Board from './components/board/Board';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <h2>Kanban board</h2>
      </div>
      <div className="outer">
        <div className="boards">
          <Board/>
          <Board/>
          <Board/>
        </div>
      </div>
    </div>
  );
}

export default App;
