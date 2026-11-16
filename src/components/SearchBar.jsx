function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
      <label className="block mb-2 text-sm sm:text-base font-medium text-gray-700">
        Search Books
      </label>

      <input
        type="text"
        placeholder="Search by title, author or category..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}

export default SearchBar;
