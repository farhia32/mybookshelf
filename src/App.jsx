import { useState } from "react";
import Header from "./components/Header";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import SearchBar from "./components/SearchBar.jsx";
import EditBook from "./components/EditBook";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // 1.Books state

  const [editingBook, setEditingBook] = useState(null);

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


// 2. Delete Function

  function handleAddBook(newBook) {
    setBooks((previousBooks) => [...previousBooks, newBook]);
  }

// 3. Edit Function
function handleEdit(book) {
  setEditingBook(book);
}

 // Save updated book information
  function handleUpdateBook(updatedBook) {
    setBooks((previousBooks) =>
      previousBooks.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
      )
    );

    setEditingBook(null);
  }

 const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

// 4.Display Components

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-4 sm:px-6 sm:py-6">
      <Header />

      <main className="w-full max-w-5xl mx-auto mt-6 sm:mt-8 space-y-5 sm:space-y-6">
        <AddBook onAddBook={handleAddBook} />

 {editingBook && ( <EditBook book={editingBook} onUpdateBook={handleUpdateBook} onCancel={() => setEditingBook(null)}/> )}

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <BookList books={filteredBooks} onDelete={handleDelete}  onEdit={handleEdit}/>
      </main>
    </div>
  );
}

export default App;