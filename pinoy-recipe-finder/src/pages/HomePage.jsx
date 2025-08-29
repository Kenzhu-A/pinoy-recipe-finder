import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import recipesData from "../data/recipes.json";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  const filtered = recipes.filter((r) =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      {/* Page title */}
      <div className="text-center">
        <h1 className="home-title">🍴 Pinoy Recipe Finder</h1>
        <p className="home-subtitle">
          Discover classic Filipino dishes, explore their ingredients, and save your favorites!
        </p>
      </div>

      {/* Search bar */}
      <div className="home-search">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {/* Recipes Grid */}
      {filtered.length > 0 ? (
        <div className="home-recipes">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="home-empty">😢 No recipes found. Try searching for another dish!</p>
      )}
    </div>
  );
}
