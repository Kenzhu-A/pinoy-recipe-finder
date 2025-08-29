import { useParams, useNavigate, Link } from "react-router-dom";
import recipesData from "../data/recipes.json";
import { useFavorites } from "../contexts/FavoritesContext";
import "../index.css";

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipesData.find((r) => r.id === Number(id));
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  if (!recipe) {
    return (
      <div className="container py-5">
        <p className="text-danger mb-3">Recipe not found.</p>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          ← Go Back
        </button>
      </div>
    );
  }

  const isFavorite = favorites.some((f) => f.id === recipe.id);

  return (
    <div className="container py-4">
      <button
        className="btn btn-link p-0 mb-3 recipe-back-btn"
        onClick={() => navigate(-1)}
        aria-label="Go back to previous page"
      >
        ← Back to list
      </button>

      <div className="position-relative rounded-3 overflow-hidden shadow mb-4 recipe-hero">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-100 d-block recipe-hero-img"
          loading="eager"
          decoding="sync"
        />
        <div className="position-absolute bottom-0 start-0 end-0 recipe-hero-overlay text-white">
          <h1 className="display-6 mb-0 recipe-hero-title">{recipe.name}</h1>
        </div>
      </div>

      <p className="lead mb-4">{recipe.description}</p>

      <div className="d-flex flex-wrap gap-2 mb-4">
        {isFavorite ? (
          <button
            className="btn btn-danger"
            onClick={() => removeFavorite(recipe.id)}
            aria-pressed="true"
          >
            Remove from Favorites
          </button>
        ) : (
          <button
            className="btn btn-success"
            onClick={() => addFavorite(recipe)}
            aria-pressed="false"
          >
            Add to Favorites
          </button>
        )}
        <Link to="/favorites" className="btn btn-outline-primary">
          View Favorites
        </Link>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <h4>Ingredients</h4>
          <ul className="list-group list-group-flush">
            {recipe.ingredients.map((ing, i) => (
              <li key={i} className="list-group-item">
                {ing}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <h4>Instructions</h4>
          <ol className="list-group list-group-numbered list-group-flush">
            {recipe.instructions.map((step, i) => (
              <li key={i} className="list-group-item">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
