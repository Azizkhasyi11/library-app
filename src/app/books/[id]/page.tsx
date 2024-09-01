"use client";

import Api from "@/app/(api)"; // Ensure this is the correct path to your API file
import { Book } from "@/types/book";
import { useCallback, useEffect, useState } from "react";

const BookPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBook = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await Api.get(`/books/${id}`);
      setBook(res.data.data);
    } catch (err) {
      setError("Failed to fetch book. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchBook();
  }, [fetchBook]);

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Book</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500 mb-4">{error}</p>
      ) : book ? (
        <div>
          <h2 className="text-xl font-bold mb-2">{book.title}</h2>
          <p className="text-sm text-gray-500 mb-4">
            {book.author.name} - {book.publication_year}
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <img
              src={book.cover_url}
              alt={book.title}
              className="w-full md:w-1/3"
            />
            <div className="flex-1">
              <p className="mb-2">{book.description}</p>
              <p className="mb-2">Pages: {book.pages}</p>
              <p className="mb-2">Publisher: {book.publisher.name}</p>
              <p className="mb-2">Stock: {book.stock}</p>
              <p className="mb-2">ISBN: {book.ISBN}</p>
              <p className="mb-2">Created At: {new Date(book.created_at).toLocaleString()}</p>
              <p className="mb-2">Updated At: {new Date(book.updated_at).toLocaleString()}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No book found.</p>
      )}
    </div>
  );
};

export default BookPage;
