import React from "react";

export interface SearchSectionProps {}

export const SearchSection: React.FC<SearchSectionProps> = () => {
  return (
    <section className="section py-4">
      <div className="flex w-full justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <label htmlFor="query" className="label">
            Search for movies
          </label>
          <input
            type="text"
            id="query"
            name="query"
            className="input"
            placeholder="Something like: Captain Marvel"
          />
        </div>
        <button className="btn">Search</button>
      </div>
    </section>
  );
};
