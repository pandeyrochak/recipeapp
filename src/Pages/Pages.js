import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import SearchedRecipes from "./SearchedRecipes";
import RecipeInformation from "./RecipeInformation";

import { Route, Routes } from "react-router-dom";
function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/search/:searchKey" element={<SearchedRecipes />} />
      <Route path="/recipe/:id" element={<RecipeInformation />} />
    </Routes>
  );
}

export default Pages;
