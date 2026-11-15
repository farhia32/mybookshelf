
import { useState } from "react";

function AddBook({ onAddBook }) {
  // Store form information
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !author.trim() || !category.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const newBook = { id: Date.now(), title: title, author: author, category: category,
    };

    onAddBook(newBook);

    // Clear the form
    setTitle("");
    setAuthor("");
    setCategory("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow space-y-4"
    >
      <h2 className="text-xl font-bold text-gray-800">
        Add a New Book
      </h2>

      {/* Book title */}
      <div>
        <label className="block mb-1 font-medium">
          Book Title
        </label>

        <input type="text"  placeholder="Enter book title"  value={title}  onChange={(e) => setTitle(e.target.value)}  className="w-full border border-gray-300 rounded-lg p-2" />
      </div>

      {/* Author */}
      <div>
        <label className="block mb-1 font-medium">
          Author
        </label>

        <input type="text" placeholder="Enter author name" value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2" />
      </div>

      {/* Category */}
      <div>
        <label className="block mb-1 font-medium"> Category</label>

        <input type="text" placeholder="Enter book category" value={category}  onChange={(e) => setCategory(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2"/>
      </div>

      {/* Submit button */}
      <button type="submit" className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition" >
 Add Book
      </button>
    </form>
  );
}

export default AddBook;
