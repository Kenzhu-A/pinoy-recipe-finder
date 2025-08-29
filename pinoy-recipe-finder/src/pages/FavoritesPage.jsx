import { useFavorites } from "../contexts/FavoritesContext";
import RecipeCard from "../components/RecipeCard";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <div className="favorites-container">
      <p className="favorites-empty">💔 No favorite recipes yet. Start exploring and add some delicious Pinoy dishes!</p>
    </div>;
  }

  return (
    <div className="favorites-container">
      <h2 className="favorites-title">❤️ My Favorite Recipes</h2>
      <div className="favorites-grid">
        {favorites.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
