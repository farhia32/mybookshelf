import { useState } from "react";

function AddBook({ onAddBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !author.trim() || !category.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const newBook = {
      id: Date.now(),
      title: title,
      author: author,
      category: category,
    };

    onAddBook(newBook);

    setTitle("");
    setAuthor("");
    setCategory("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 sm:p-6 rounded-lg shadow-sm space-y-4"
    >
      <h2 className="text-lg sm:text-xl font-bold text-gray-800">
        Add a New Book
      </h2>

      {/* Book title */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Book Title
        </label>

        <input
          type="text"
          placeholder="Enter book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Author */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Author
        </label>

        <input
          type="text"
          placeholder="Enter author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Category */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>

        <input
          type="text"
          placeholder="Enter book category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full sm:w-auto bg-green-700 text-white px-5 py-3 rounded-lg hover:bg-green-800 transition text-sm sm:text-base"
      >
        Add Book
      </button>
    </form>
  );
}

export default AddBook;