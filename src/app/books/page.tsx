"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Book } from "@/types/book";

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("http://library-api.test/api/books");
      setBooks(res.data.data);
    } catch (err) {
      setError("Failed to fetch books. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      <Button
        onClick={fetchBooks}
        disabled={loading}
      >
        {loading ? "Loading..." : "Fetch Books"}
      </Button>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
        {books.map((book) => (
          <Card
            key={book.id}
            className="shadow-md hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <CardTitle>{book.title}</CardTitle>
              <CardDescription>{book.author.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{book.description}</p>
              <Button asChild>
                <Link href={`/books/${book.id}`}>View Book</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
