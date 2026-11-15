import BookItem from "./BookItem";

function BookList({ books }) {
  return (
    <div className="space-y-4">
{books.map((book) => (<BookItem key={book.id} book={book} />
))}
    </div>
  );
}

export default BookList;