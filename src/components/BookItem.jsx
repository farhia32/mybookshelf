import { BookOpen, Trash2, Pencil } from "lucide-react";

function BookItem({ book, onDelete, onEdit }) {
  return (
    <div className="flex items-center justify-between gap-3 bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-200">

      {/* Book information */}
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <div className="bg-green-100 p-2 sm:p-3 rounded-lg shrink-0">
          <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-green-700" />
        </div>

        <div className="min-w-0">
          <h3 className="font-bold text-sm sm:text-base text-gray-800 break-words">
            {book.title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-500 break-words">
            By {book.author}
          </p>

          <span className="text-xs text-green-700 break-words">
            {book.category}
          </span>
        </div>
      </div>

      {/* Edit and Delete buttons */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <button
          onClick={() => onEdit(book)}
          className="text-blue-500 hover:text-blue-700 transition p-1"
          aria-label={`Edit ${book.title}`}
        >
          <Pencil size={18} />
        </button>

        <button
          onClick={() => onDelete(book.id)}
          className="text-red-500 hover:text-red-700 transition p-1"
          aria-label={`Delete ${book.title}`}
        >
          <Trash2 size={18} />
        </button>
      </div>

    </div>
  );
}

export default BookItem;
