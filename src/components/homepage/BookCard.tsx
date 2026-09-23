import IBookType from "@/types/typs";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }: { book: IBookType }) => {
  return (
    <div className=" group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:rounded-3xl">
      {/* Image */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Subtle gradient for legibility */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />

        {/* Category */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-violet-600 shadow backdrop-blur-sm sm:left-4 sm:top-4 sm:px-3 sm:text-sm">
          {book.category}
        </span>

        {/* Rating */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm sm:right-4 sm:top-4 sm:px-3 sm:text-sm">
          ⭐ {book.rating}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h2 className="line-clamp-1 text-base font-bold text-gray-900 sm:text-lg">
          {book.bookName}
        </h2>
        <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
          by <span className="font-medium text-gray-700">{book.author}</span>
        </p>
        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-violet-50 px-2.5 py-0.5 text-xs font-medium text-violet-600"
            >
              #{tag}
            </span>
          ))}
        </div>
        {/* Review */}
        <p className="mt-3 line-clamp-2 text-sm leading-5 text-gray-600">
          {book.review}
        </p>
        {/* Book Info */}
        <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3 text-xs sm:text-sm">
          <div>
            <span className="text-gray-400">Pages: </span>
            <span className="font-semibold text-gray-800">
              {book.totalPages}
            </span>
          </div>
          <div>
            <span className="text-gray-400">Published: </span>
            <span className="font-semibold text-gray-800">
              {book.yearOfPublishing}
            </span>
          </div>
        </div>
        {/* Button - pinned to bottom via flex-1 above */}
        <Link href={`/books/${book.bookId}`}>
          <button className="mt-4 w-full rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 py-2 text-sm font-semibold text-white transition hover:from-violet-700 hover:to-indigo-700 active:scale-[0.98]">
            View Details →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
