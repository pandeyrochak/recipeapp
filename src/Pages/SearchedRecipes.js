import React, {  useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import styled from "styled-components";

const SearchedRecipes = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const params = useParams();
  const getSearchedRecipes = async (name) => {
    const localSearchedRecipesData = localStorage.getItem(
      `searchedRecipesData${name}`
    );
    if (localSearchedRecipesData) {
      setSearchedRecipes(JSON.parse(localSearchedRecipesData));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
      );
      const searchedRecipesData = await data.json();
      localStorage.setItem(
        `searchedRecipesData${name}`,
        JSON.stringify(searchedRecipesData.results)
      );
      setSearchedRecipes(searchedRecipesData.results);
    }
  };

  useEffect(() => {
    getSearchedRecipes(params.searchKey);
  }, [params.searchKey]);
  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default SearchedRecipes;
