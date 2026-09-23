import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishListButton";
import IBookType from "@/types/typs";
import Image from "next/image";

interface IDetalisPorps {
  params: Promise<{
    bookId: string;
  }>;
}
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
const BooksDeltailsPage = async ({ params }: IDetalisPorps) => {
  const { bookId } = await params;
  const bookData = await getBooks();
  const book = bookData.find(
    (book: IBookType) => String(book.bookId) === String(bookId),
  ) as IBookType;
  return (
    <div className="max-w-5xl mx-auto my-8 px-4">
      <div className="card lg:card-side bg-base-100 shadow-lg border border-base-200 overflow-hidden">
        {/* Book Image */}
        <figure className="lg:w-72 shrink-0">
          <Image
            src={book.image}
            alt={book.bookName}
            height={400}
            width={300}
            className="h-80 lg:h-full w-full object-cover"
          />
        </figure>

        {/* Book Info */}
        <div className="card-body p-5 lg:p-6">
          {/* Title + Category */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold leading-tight">
                {book.bookName}
              </h2>
              <p className="text-sm text-base-content/60 mt-1">
                by {book.author}
              </p>
            </div>

            <span className="badge badge-primary badge-outline">
              {book.category}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <div className="rating rating-sm">
              {[1, 2, 3, 4, 5].map((star) => (
                <input
                  key={star}
                  type="radio"
                  name={`rating-${book.bookId}`}
                  className="mask mask-star-2 bg-orange-400"
                  checked={star <= Math.round(book.rating)}
                  readOnly
                />
              ))}
            </div>

            <span className="text-sm font-medium">{book.rating}</span>
          </div>

          {/* Review */}
          <p className="text-sm text-base-content/75 leading-relaxed line-clamp-3 mt-2">
            {book.review}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-1">
            {book.tags.map((tag) => (
              <span key={tag} className="badge badge-ghost badge-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* Book Information */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3 text-sm">
            <div>
              <p className="text-xs text-base-content/50">Pages</p>
              <p className="font-medium">{book.totalPages}</p>
            </div>

            <div>
              <p className="text-xs text-base-content/50">Published</p>
              <p className="font-medium">{book.yearOfPublishing}</p>
            </div>
            <div>
              <p className="text-xs text-base-content/50">Publisher</p>
              <p className="font-medium truncate">{book.publisher}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-4">
            <ReadButton book={book} />
            <WishListButton book={book} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDeltailsPage;
