import { useState } from "react";

function EditBook({ book, onUpdateBook, onCancel }) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [category, setCategory] = useState(book.category);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !author.trim() || !category.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const updatedBook = { ...book, title: title.trim(), author: author.trim(),  category: category.trim(),
    };

    onUpdateBook(updatedBook);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold mb-4">Edit Book</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text"  value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title" className="w-full border rounded-lg p-2" />

        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author"  className="w-full border rounded-lg p-2"/>

        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category"  className="w-full border rounded-lg p-2"/>

        <div className="flex gap-3">
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"> Save Changes </button>

          <button type="button" onClick={onCancel} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">Cancel </button>
        </div>
      </form>
    </div>
  );
}

export default EditBook;
