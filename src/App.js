import Pages from "./Pages/Pages";
import "./App.css";
import Categories from "./Components/UI/Categories";
import { BrowserRouter } from "react-router-dom";
import Search from "./Components/UI/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
