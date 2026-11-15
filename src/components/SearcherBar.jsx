import{ useState} from "react";

function SearchBar() {

const [searchTerm, setSearchTerm] =useState("")

  return (
    <div>
  <div>
        <label className="block mb-1 font-medium">
          Search
        </label>

        <input type="text"  placeholder="Enter book title, author, genre..."  value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)}  className="w-full border border-gray-300 rounded-lg p-2" />
      </div>

    </div>
  );
}

export default SearchBar;