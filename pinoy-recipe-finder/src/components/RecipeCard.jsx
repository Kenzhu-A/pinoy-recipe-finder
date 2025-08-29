import { Link } from "react-router-dom";
import "../style.css"; // import custom styles

export default function RecipeCard({ recipe }) {
  return (
    <div className="card recipe-card h-100 d-flex flex-column">
      <img
        src={recipe.image}
        className="card-img-top recipe-card-img"
        alt={recipe.name}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title recipe-card-title">{recipe.name}</h5>
        <p className="card-text recipe-card-text flex-grow-1">{recipe.description}</p>
        <div className="mt-auto">
          <Link to={`/recipe/${recipe.id}`} className="btn recipe-card-btn w-100">
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
}
