import "../style.css"

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="searchbar-container">
      <input
        type="text"
        className="searchbar-input"
        placeholder="🔍 Search for a recipe (e.g. Adobo)..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
