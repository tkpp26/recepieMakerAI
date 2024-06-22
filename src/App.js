import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IngredientInput from "./components/IngredientInput";
import ImageUpload from "./components/ImageUpload";
import Home from "./components/Home";
import RecipeList from "./components/RecipeList";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/input" element={<IngredientInput />} />
      <Route path="/upload" element={<ImageUpload />} />
      <Route path="/recipes" element={<RecipeList />} />
    </Routes>
  );
}

export default App;
