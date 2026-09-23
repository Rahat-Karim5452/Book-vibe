"use client";

import { BooksContext } from "@/context/BooksContext";
import IBookType from "@/types/typs";
import { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBookType }) => {
  const { wishList, setWishList } = useContext(BooksContext);
  const handleWishListBooks = () => {
    console.log("read book button Triggerd ");
    // setReadBooks((prevReadBooks)=>[...prevReadBooks,book]);
    setWishList([...wishList, book]);
    toast(`You have add Books in WishList"${book.bookName}"`);
  };
  return (
    <div>
      <button
        className="btn btn-outline btn-sm"
        onClick={() => handleWishListBooks()}
      >
        Add to WishList
      </button>
    </div>
  );
};

export default WishListButton;
