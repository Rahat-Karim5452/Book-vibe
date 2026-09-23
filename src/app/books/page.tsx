import IBookType from "@/types/typs";
import BookCard from "../../components/homepage/BookCard";

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
    <section className="max-w-7xl mx-auto py-10">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider">
          Our Collection
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Explore All Books
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mt-3">
          Discover our collection of amazing books and find your next favorite
          read. Explore different genres, stories, and knowledge all in one
          place.
        </p>
      </div>

      {/* Books */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {booksData.map((book) => (
          <BookCard key={book.bookName} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
