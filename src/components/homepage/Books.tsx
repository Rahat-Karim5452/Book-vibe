import IBookType from "@/types/typs";
import BookCard from "./BookCard";

const getBooks = async (): Promise<IBookType[]> => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const data = await res.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  console.log(booksData);

  return (
    <section className="max-w-7xl mx-auto">
      Books
      <div className="grid grid-cols-4 gap-3">
        {booksData.slice(0, 5).map((book) => (
          <BookCard key={book.bookName} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
