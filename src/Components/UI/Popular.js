import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Popular() {
  const [popularRecipes, setPopularRecipes] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const dataInLocalStorage = localStorage.getItem("popularRecipes");
    if (dataInLocalStorage) {
      setPopularRecipes(JSON.parse(dataInLocalStorage));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popularRecipes", JSON.stringify(data.recipes));
      setPopularRecipes(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Trending Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "3rem",
          }}
        >
          {popularRecipes.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={`/recipe/${recipe.id}`}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                  </Link>
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 5rem 0rem;
`;

const Card = styled.div`
  min-height: 15rem;
  max-width: 25rem;
  overflow: hidden;
  border-radius: 2rem;
  position: relative;
  img {
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    left: 0;
    position: absolute;
    object-fit: cover;
  }
  p {
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
    color: #ffff;
    z-index: 10;
  }
`;

const Gradient = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 3;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
`;
export default Popular;
