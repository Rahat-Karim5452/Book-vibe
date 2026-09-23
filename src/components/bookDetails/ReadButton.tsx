"use client";

import BooksProvider, { BooksContext } from "@/context/BooksContext";
import IBookType from "@/types/typs";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBookType }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);
  const handleReadBooks = () => {
    console.log("read book button Triggerd ");
    // setReadBooks((prevReadBooks)=>[...prevReadBooks,book]);
    setReadBooks([...readBooks, book]);
    toast(`You have Read"${book.bookName}"`);
  };
  return (
    <div>
      <button
        className="btn btn-outline btn-sm"
        onClick={() => handleReadBooks()}
      >
        Read
      </button>
    </div>
  );
};

export default ReadButton;
