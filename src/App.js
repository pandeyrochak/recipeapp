import Pages from "./Pages/Pages";
import "./App.css";
import Categories from "./Components/UI/Categories";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
