import React from "react";
import NextLink from "next/link";
import { MovieCard } from "./MovieCard";

export interface MoviesListProps {
  title: string;
  moreHref?: string;
}

export const MoviesList: React.FC<MoviesListProps> = ({ title, moreHref }) => {
  return (
    <section className="section text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium mb-2">{title}</h1>
            <div className="h-1 w-20 bg-indigo-500 rounded" />
          </div>
          <div className="lg:w-1/2 w-full leading-relaxed text-gray-500 flex lg:justify-end">
            {moreHref && (
              <NextLink href={moreHref}>
                <a className="link">
                  See More
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
            )}
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </section>
  );
};
