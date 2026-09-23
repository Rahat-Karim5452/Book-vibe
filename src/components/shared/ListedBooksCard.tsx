import IBookType from "@/types/typs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListedBooksCard = ({ book }: { book: IBookType }) => {
  return (
    <div
      key={book.bookId}
      className="card card-side bg-base-100 shadow-md border border-gray-200 p-4"
    >
      {/* Left Side - Image */}
      <figure className="w-40 h-52 shrink-0">
        <Image
          src={book.image}
          alt={book.bookName}
          width={400}
          height={200}
          className="w-full h-full object-cover rounded-xl"
        />
      </figure>

      {/* Right Side - Content */}
      <div className="card-body p-4">
        <h2 className="card-title text-2xl font-bold">{book.bookName}</h2>

        <p className="text-gray-500">By {book.author}</p>

        <div className="flex gap-3 flex-wrap mt-2">
          <span className="badge badge-outline">{book.category}</span>

          <span className="badge badge-warning">⭐ {book.rating}</span>
        </div>

        <div className="card-actions justify-end mt-auto">
          <Link href={`/books/${book.bookId}`}>
            <button className="btn btn-primary btn-sm">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;
