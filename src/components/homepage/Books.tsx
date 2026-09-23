import IBookType from "@/types/typs";
import BookCard from "./BookCard";

const getBooks = async (): Promise<IBookType[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error Fetching Data", error);
    return [];
  }
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
