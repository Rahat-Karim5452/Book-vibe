"use client";

import { createContext, ReactNode, useState } from "react";

export const BooksContext = createContext({});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  const shareData = {
    readBooks,
    setReadBooks,
    wishList,
    setWishList,
  };

  return (
    <BooksContext.Provider value={shareData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
