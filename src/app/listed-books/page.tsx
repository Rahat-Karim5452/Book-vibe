"use client";

import ListedBooksCard from "@/components/shared/ListedBooksCard";
import { BooksContext } from "@/context/BooksContext";
import IBookType from "@/types/typs";

import { useContext, useState } from "react";

const ListedBookspage = () => {
  const { readBooks, wishList } = useContext(BooksContext);
  const { sortby, setSortBy } = useState<"rating" | "pages" | "year">("rating");

  const sortBooks = (books: IBookType[]) => {
    const sortedBooks = [...books];
    if (sortby === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortby === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - b.totalPages);
    } else if (sortby === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - b.yearOfPublishing);
    }
  };
  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishList);
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="bg-amber-100 rounded-2xl py-10 font-bold text-4xl text-center mb-8">
          Listed Books
        </h2>

        <div className="text-center">
          <select
            value={sortby}
            onChange={(e) =>
              setSortBy(e.target.value as "rating" | "pages" | "year")
            }
            className="select select-success "
          >
            <option disabled={true}>Sort by</option>
            <option value={"rating"}>Rating</option>
            <option value={"year"}>Publised Year</option>
            <option value={"pages"}>Number of Pages</option>
          </select>
        </div>

        <div className="tabs tabs-lift w-full">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab rounded"
            aria-label={`Read Books (${readBooks.length})`}
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {sortedReadBooks.length > 0 ? (
              sortedReadBooks.map((book: IBookType) => {
                return <ListedBooksCard key={book.bookId} book={book} />;
              })
            ) : (
              <p className="text-2xl text-center font-semibold">
                No Read Books
              </p>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label={`WishList Books (${wishList.length})`}
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6 space-y-5">
            {sortedWishlist.length > 0 ? (
              sortedWishlist.map((book: IBookType) => {
                return <ListedBooksCard key={book.bookId} book={book} />;
              })
            ) : (
              <p className="text-2xl text-center font-semibold">
                No WishList Books
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBookspage;
