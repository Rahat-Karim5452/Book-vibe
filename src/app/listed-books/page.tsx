"use client";

import ListedBooksCard from "@/components/shared/ListedBooksCard";
import { BooksContext } from "@/context/BooksContext";
import IBookType from "@/types/typs";

import { useContext } from "react";

const ListedBookspage = () => {
  const { readBooks, wishList } = useContext(BooksContext);
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="bg-amber-100 rounded-2xl py-10 font-bold text-4xl text-center mb-8">
          Listed Books
        </h2>

        <div className="tabs tabs-lift w-full">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab rounded"
            aria-label={`Read Books (${readBooks.length})`}
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {readBooks.length > 0 ? (
              readBooks.map((book: IBookType) => {
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
            {wishList.length > 0 ? (
              wishList.map((book: IBookType) => {
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
