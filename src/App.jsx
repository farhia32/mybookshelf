import { useState } from "react";
import Header from "./components/Header";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import SearchBar from "./components/SearchBar.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // 1.Books state
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
      title: "A Good Girl's Guide to Murder",
      author: "Holly Jackson",
      category: "Mystery",
    },
  ]);

  function handleDelete(id) {
    setBooks((previousBooks) =>
      previousBooks.filter((book) => book.id !== id)
    );
  }

   const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  
// 2. Delete Function

  function handleAddBook(newBook) {
    setBooks((previousBooks) => [...previousBooks, newBook]);
  }

// 3.Display Components

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header />

      <main className="max-w-5xl mx-auto mt-8 space-y-6">
        <AddBook onAddBook={handleAddBook} />

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <BookList books={filteredBooks} onDelete={handleDelete} />
      </main>
    </div>
  );
}

export default App;