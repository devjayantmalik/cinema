import React from "react";
import NextLink from "next/link";

export interface MovieCardProps {}

export const MovieCard: React.FC<MovieCardProps> = () => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg dark:bg-gray-700">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src="https://dummyimage.com/720x400"
          alt="content"
        />
        <h3 className="tracking-widest text-indigo-500 dark:text-white text-sm font-medium">
          Amateur
        </h3>
        <h2 className="text-lg text-gray-900 dark:text-white font-medium title-font mb-4">
          Captain Marvel
        </h2>
        <p className="text-base leading-relaxed mt-2">
          Just a parody movie, we brought for you. Watch and enjoy the beautiful
          actors and actresses.
        </p>
        <NextLink href="/watch/id">
          <a className="link mt-3">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </NextLink>
      </div>
    </div>
  );
};
