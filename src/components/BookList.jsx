import BookItem from "./BookItem";

function BookList({ books, onDelete, onEdit }) {
  return (
    <div className="space-y-4">
{books.map((book) => (<BookItem key={book.id} book={book}  onDelete={onDelete} onEdit={onEdit}/>
))}
    </div>
  );
}

export default BookList;