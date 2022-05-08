import Pages from "./Pages/Pages";
import "./App.css";
import Categories from "./Components/UI/Categories";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./Components/UI/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>deliciouss</Logo>
        </Nav>
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;
const Nav= styled.div`
  padding: 4rem 0rem;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size:2rem
  }
`

export default App;
