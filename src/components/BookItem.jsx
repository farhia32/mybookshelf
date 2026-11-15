import { BookOpen, Trash2 } from "lucide-react";

function BookItem({ book, onDelete }) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-200">

      {/* Book information */}
      <div className="flex items-center gap-3">

        {/* Book icon */}
        <div className="bg-green-100 p-3 rounded-lg">
          <BookOpen className="w-6 h-6 text-green-700" />
        </div>

        {/* Book details */}
        <div>
          <h3 className="font-bold text-gray-800">
            {book.title}
          </h3>

          <p className="text-sm text-gray-500">
            By {book.author}
          </p>

          <span className="text-xs text-green-700">
            {book.category}
          </span>
        </div>
      </div>

      {/* Delete button */}
      <button
        onClick={() => onDelete(book.id)}
        className="text-red-500 hover:text-red-700 transition"
        aria-label={`Delete ${book.title}`}
      >
        <Trash2 size={20} />
      </button>

    </div>
  );
}

export default BookItem;
