import logo from "./logo.svg";
import "./App.scss";
import TodoList from "./components/Header";
import ShowImg from "./views/Test/ShowImg";
import Style from "./views/HOC/Style.js";
import ShoppingList from "./components/ShoppingList.js";
import Album from "./views/ListCard/ListCard.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Utimates for everyone.</p>

        <TodoList />
        <Style />
        <ShoppingList />
      </header>
      <Album />
    </div>
  );
}

export default App;
