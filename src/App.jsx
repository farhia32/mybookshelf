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
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      category: "Finance",
    },
     {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
  },
  ]);

  // 2. Delete function
  function handleDelete(id) {
    setBooks(books.filter((book) => book.id !== id));
  }

function handleAddBook(newBook) {
  setBooks((previousBooks) => [...previousBooks, newBook]);
}

  // 3. Display components
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header />

      <main className="max-w-5xl mx-auto mt-8 space-y-6">
        <BookList books={books} onDelete={handleDelete}/>
        <AddBook onAddBook={handleAddBook}/>
      </main>
    </div>
  );

}


export default App;
