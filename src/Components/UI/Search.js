import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate=useNavigate();
  const handleSubmit=(event) => {
    event.preventDefault();
    navigate(`/search/${searchInput}`)
  }
  return (
    <FormComponent onSubmit={handleSubmit}>
      <div>
        <FaSearch />
        <input
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          placeholder="Search you favorite recipe"
        />
      </div>
    </FormComponent>
  );
};

const FormComponent = styled.form`
  margin: 0rem 25%;
  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(to right, #494949, #313131);
    border-radius: 5rem;
    color: white;
    font-size: 1rem;
    padding: 0.8rem 1.5rem 0.8rem 2.5rem;
    width: 100%;
  }
  svg {
    top: 50%;
    left: 0%;
    color: white;
    position: absolute;
    transform: translate(100%, -50%);
  }
`;

export default Search;
