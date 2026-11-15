import { useState } from "react";
import Header from "./components/Header";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {

  // 1. Books state
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self-development",
    },
    {
      id: 2,
      title: "I Hope This Finds You",
      author: "Ann Liang",
      category: "Romance",
    },
     {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
  },
   {
    id: 4,
    title: "A Good Girl Guide To Murder",
    author: "Holy Jackson",
    category: "Mystery",
  },
  ]);

  // 2. Delete function
 function handleDelete(id) {
  setBooks((previousBooks) =>
    previousBooks.filter((book) => book.id !== id)
  );
}

function handleAddBook(newBook) {
  setBooks((previousBooks) => [...previousBooks, newBook]);
}

  // 3. Display components
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header />

      <main className="max-w-5xl mx-auto mt-8 space-y-6">
        <AddBook onAddBook={handleAddBook}/>
        <BookList books={books} onDelete={handleDelete}/>
      </main>
    </div>
  );

}


export default App;
