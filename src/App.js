import logo from "./logo.svg";
import "./App.scss";
import TodoList from "./components/Header";
import ShowImg from "./views/Test/ShowImg";
import MyApp from "./views/HOC/Style.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Utimates for your.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TodoList />
        <MyApp />
      </header>
      <ShowImg />
    </div>
  );
}

export default App;
