import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const RecipeInformation = () => {
  const params = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});
  const [activeButton, setActiveButton] = useState("instructions");

  const getRecipeDetails = async (recipeID) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const details = await data.json();
    setRecipeDetails(details);
  };

  useEffect(() => {
    getRecipeDetails(params.id);
  }, [params.id]);

  return (
    <DetailWrapper>
      <div>
        <h2>{recipeDetails.title}</h2>
        <img src={recipeDetails.image} alt={recipeDetails.title} />
      </div>
      <Info>
        <Button
          className={activeButton === "instructions" ? "active" : ""}
          onClick={() => {
            setActiveButton("instructions");
          }}
        >
          Instructions
        </Button>
        <Button
          className={activeButton === "ingredients" ? "active" : ""}
          onClick={() => {
            setActiveButton("ingredients");
          }}
        >
          Ingredients
        </Button>
        {activeButton === "instructions" && (
          <div>
            <h3
              dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}
            ></h3>
            <h3
              dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}
            ></h3>
          </div>
        )}
        {activeButton==="ingredients" && (
            <ul>
            {
                recipeDetails.extendedIngredients.map((item)=>(<li key={item.id}>{item.original}</li>))
            }
            </ul>
        )}


      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(to right, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 1rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    min-width: 18rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default RecipeInformation;
