"use client";

import Link from "next/link";

export default function ErrorPage({
  error,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full h-[50vh]">
      <h2 className="text-lg font-bold">Sorry, there is something wrong.</h2>
      <p className="w-full p-4 font-mono text-lg text-center bg-red-200">
        {error.message}
      </p>
      <Link
        className="text-blue-700 border-b-2 border-b-blue-700 hover:border-b-blue-900 hover:text-blue-900"
        href="/"
      >
        Go back to home page
      </Link>
    </div>
  );
}
