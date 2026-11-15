import BookItem from "./BookItem";

function BookList({ books, onDelete }) {
  return (
    <div className="space-y-4">
{books.map((book) => (<BookItem key={book.id} book={book}  onDelete={onDelete}/>
))}
    </div>
  );
}

export default BookList;