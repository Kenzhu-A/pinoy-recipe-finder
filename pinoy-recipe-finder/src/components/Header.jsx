import { Link } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext";
import "../index.css";

export default function Header() {
  const { favorites } = useFavorites();

  return (
    <nav
      className="navbar main-navbar navbar-expand-lg shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <Link className="navbar-brand app-brand" to="/">
          <span className="brand-icon" aria-hidden="true">🍴</span>
          <span className="brand-text">Pinoy Recipe Finder</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link app-nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link app-nav-link d-flex align-items-center"
                to="/favorites"
              >
                <span className="favorites-heart" aria-hidden="true">❤️</span>
                <span className="favorites-label">Favorites</span>
                <span className="favorites-badge" aria-live="polite">
                  {favorites.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
