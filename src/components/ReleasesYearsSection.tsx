import React from "react";

export interface ReleasesYearsSectionProps {}

export const ReleasesYearsSection: React.FC<ReleasesYearsSectionProps> = () => {
  return (
    <section className="section" id="years">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center mb-4">
            Releases
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            If you find any movie missing from any year, please report us at via
            contact section.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/6 sm:w-1/3 w-full">
            <h2 className="font-medium title-font tracking-widest mb-4 text-sm text-center sm:text-left">
              1970 - 1974
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              <a className="link">1970</a>
              <a className="link">1971</a>
              <a className="link">1972</a>
              <a className="link">1973</a>
              <a className="link">1974</a>
            </nav>
          </div>
          <div className="p-4 lg:w-1/6 sm:w-1/3 w-full">
            <h2 className="font-medium title-font tracking-widest mb-4 text-sm text-center sm:text-left">
              1975 - 1979
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              <a className="link">1975</a>
              <a className="link">1976</a>
              <a className="link">1977</a>
              <a className="link">1978</a>
              <a className="link">1979</a>
            </nav>
          </div>
          <div className="p-4 lg:w-1/6 sm:w-1/3 w-full">
            <h2 className="font-medium title-font tracking-widest mb-4 text-sm text-center sm:text-left">
              1980 - 1984
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              <a className="link">1980</a>
              <a className="link">1981</a>
              <a className="link">1982</a>
              <a className="link">1983</a>
              <a className="link">1984</a>
            </nav>
          </div>
          <div className="p-4 lg:w-1/6 sm:w-1/3 w-full">
            <h2 className="font-medium title-font tracking-widest mb-4 text-sm text-center sm:text-left">
              1985 - 1989
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              <a className="link">1985</a>
              <a className="link">1986</a>
              <a className="link">1987</a>
              <a className="link">1988</a>
              <a className="link">1989</a>
            </nav>
          </div>

          <div className="p-4 lg:w-1/6 sm:w-1/3 w-full">
            <h2 className="font-medium title-font tracking-widest mb-4 text-sm text-center sm:text-left">
              1990 - 1994
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              <a className="link">1990</a>
              <a className="link">1991</a>
              <a className="link">1992</a>
              <a className="link">1993</a>
              <a className="link">1994</a>
            </nav>
          </div>
          <div className="p-4 lg:w-1/6 sm:w-1/3 w-full">
            <h2 className="font-medium title-font tracking-widest mb-4 text-sm text-center sm:text-left">
              1995 - 1999
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              <a className="link">1995</a>
              <a className="link">1996</a>
              <a className="link">1997</a>
              <a className="link">1998</a>
              <a className="link">1999</a>
            </nav>
          </div>
        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Report Missing Movie
        </button>
      </div>
    </section>
  );
};
