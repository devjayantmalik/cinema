import React from "react";

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="section">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex font-medium items-center md:justify-start justify-center">
            <svg
              className="w-20 h-20 text-white p-2 bg-transparent rounded-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox=".00014 35.83239 512.31982 440.6546"
            >
              <defs />
              <path
                fill="#ffe100"
                d="M211.093 344.221C138.56 363.847 63.467 320.327 43.84 247.794L8.853 115.527l27.307 6.827c76.8 19.627 158.72-2.56 215.893-58.027l20.48-19.627 34.987 132.267c19.627 72.534-23.04 147.627-96.427 167.254"
              />
              <path
                fill="#fff"
                d="M69.44 250.354l-34.133-125.44L8 118.087l34.987 132.267c17.92 64.853 80.213 106.667 145.067 99.84-55.467-5.12-104.107-43.52-118.614-99.84"
              />
              <path
                fill="#ffe100"
                d="M486.72 239.261c-59.733 15.36-121.173 7.68-174.08-19.627-3.413 57.173-42.667 108.373-100.693 124.587-3.413.853-6.827 1.707-10.24 2.56 5.973 54.613 44.373 102.4 100.693 116.907 72.533 19.627 147.627-23.893 167.253-96.427l34.133-132.267-17.066 4.267z"
              />
              <path
                fill="#ffa800"
                d="M487.573 239.261c-3.413.853-6.827 1.707-10.24 2.56l-33.28 125.44c-15.36 56.32-64 95.573-118.613 100.693 64.853 5.973 127.147-34.987 144.213-100.693l34.987-132.267-17.067 4.267z"
              />
              <path d="M176.107 357.021c-64 0-122.88-42.667-139.947-107.52L.32 117.234c-.853-2.56 0-5.973 2.56-8.533 1.707-2.56 5.12-3.413 8.533-2.56l27.307 6.827c74.24 18.773 153.6-2.56 208.213-55.467l20.48-19.627c2.56-1.707 5.12-2.56 8.533-1.707 2.56.853 5.12 3.413 5.973 5.973l34.133 132.267c20.48 77.653-25.6 157.013-102.4 177.493-12.799 3.414-24.745 5.121-37.545 5.121zm34.986-12.8zM20.8 127.474l31.573 117.76c17.92 68.267 88.747 108.373 157.013 90.453 68.267-17.92 108.373-88.747 90.453-157.013l-31.573-117.76-9.387 9.387C200 127.474 114.667 150.514 34.453 130.034l-13.653-2.56z" />
              <path d="M186.347 191.474h-1.707c-4.267-.853-7.68-5.12-6.827-9.387 3.413-22.187 14.507-35.84 32.427-40.96 17.92-5.12 34.987 1.707 48.64 18.773 2.56 3.413 2.56 9.387-1.707 11.947-3.413 2.56-9.387 2.56-11.947-1.707-9.387-11.947-18.773-16.213-30.72-12.8-11.947 3.413-17.92 11.093-20.48 26.453.001 4.268-4.266 7.681-7.679 7.681zM87.36 217.927h-1.707c-4.267-.853-7.68-5.12-6.827-9.387 3.413-22.187 14.507-35.84 32.427-40.96 17.92-5.12 34.987 1.707 48.64 18.773 2.56 3.413 2.56 9.387-1.707 11.947-3.413 2.56-9.387 2.56-11.947-1.707-9.387-11.947-18.773-16.213-30.72-12.8s-17.92 11.093-20.48 26.453c.001 4.268-4.266 7.681-7.679 7.681zM176.107 305.821c-20.48 0-40.96-6.827-58.027-20.48-3.413-2.56-4.267-8.533-1.707-11.947 2.56-3.413 8.533-4.267 11.947-1.707 19.627 15.36 43.52 20.48 67.413 13.653 23.893-5.973 42.667-23.04 51.2-45.227 1.707-4.267 6.827-6.827 11.093-5.12 4.267 1.707 6.827 6.827 5.12 11.093-11.093 27.307-34.133 47.787-63.147 55.467-7.679 3.414-16.212 4.268-23.892 4.268zM303.253 303.261c-3.413 0-7.68-.853-11.947-1.707-3.413-.853-5.12-1.707-7.68-2.56-4.267-1.707-5.973-6.827-4.267-11.093s6.827-5.973 11.093-4.267c1.707.853 2.56.853 5.12 1.707 11.947 3.413 21.333-.853 30.72-12.8 2.56-3.413 8.533-4.267 11.947-1.707 3.413 2.56 4.267 8.533 1.707 11.947-11.093 13.653-23.039 20.48-36.693 20.48zM402.24 329.714c-3.413 0-7.68-.853-11.947-1.707-17.92-5.12-29.013-18.773-32.427-40.107-.853-4.267 2.56-9.387 6.827-9.387 4.267-.853 9.387 2.56 9.387 6.827 2.56 15.36 8.533 23.893 20.48 26.453 11.947 3.413 21.333-.853 30.72-12.8 2.56-3.413 8.533-4.267 11.947-1.707 3.413 2.56 4.267 8.533 1.707 11.947-11.094 13.654-23.041 20.481-36.694 20.481zM382.613 432.114c-3.413 0-6.827-1.707-7.68-5.12-9.387-23.04-28.16-39.253-51.2-45.227-23.893-5.973-47.787-1.707-67.413 13.653-3.413 2.56-9.387 2.56-11.947-1.707-2.56-3.413-2.56-9.387 1.707-11.947 23.893-18.773 53.76-24.747 81.92-17.067 29.013 7.68 52.053 28.16 63.147 55.467 1.707 4.267 0 9.387-5.12 11.093-.854.002-2.56.855-3.414.855z" />
              <path d="M336.533 476.487c-12.8 0-25.6-1.707-37.547-5.12-58.027-15.36-99.84-64.853-106.667-124.587-.853-4.267 2.56-8.533 6.827-9.387 3.413-.853 6.827-.853 9.387-1.707 53.76-14.507 91.307-61.44 94.72-116.907 0-2.56 1.707-5.12 4.267-6.827 2.56-1.707 5.973-1.707 8.533 0 52.053 26.453 111.787 33.28 168.107 18.773l1.707 8.533-1.707-8.533 17.067-4.267c2.56-.853 5.973 0 8.533 2.56 1.707 2.56 2.56 5.12 2.56 8.533l-34.987 132.267c-10.24 37.547-34.133 69.12-67.413 87.893-23.04 11.95-47.787 18.776-73.387 18.776zM210.24 352.754c8.533 49.493 44.373 88.747 93.013 102.4 33.28 8.533 67.413 4.267 97.28-12.8 29.867-17.067 51.2-44.373 59.733-77.653l31.573-117.76-3.413.853c-56.32 14.507-116.053 9.387-168.96-15.36-8.533 57.173-49.493 104.107-105.813 119.467-.853 0-1.706.853-3.413.853z" />
            </svg>
          </a>
          <p className="mt-2 text-sm text-gray-500 dark:text-white">
            Collection of movies with simplified watch and download experience
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
              Quick Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="nav-link">Home</a>
              </li>
              <li>
                <a className="nav-link">About</a>
              </li>
              <li>
                <a className="nav-link">Latest Releases</a>
              </li>
              <li>
                <a className="nav-link">Contact Us</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
              Genres
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="nav-link">Action</a>
              </li>
              <li>
                <a className="nav-link">Adult</a>
              </li>
              <li>
                <a className="nav-link">Sci-Fi</a>
              </li>
              <li>
                <a className="nav-link">Documentary</a>
              </li>
              <li>
                <a className="nav-link">Series</a>
              </li>
              <li>
                <a className="nav-link">Romance</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
              Movie Size
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="nav-link">100 MB to 300 MB</a>
              </li>
              <li>
                <a className="nav-link">300 MB to 500 MB</a>
              </li>
              <li>
                <a className="nav-link">500 MB to 1 GB</a>
              </li>
              <li>
                <a className="nav-link">1 GB to 2 GB</a>
              </li>
              <li>
                <a className="nav-link">2 GB or More</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
              Social Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="nav-link">Twitter</a>
              </li>
              <li>
                <a className="nav-link">Facebook</a>
              </li>
              <li>
                <a className="nav-link">Github</a>
              </li>
              <li>
                <a className="nav-link">Instagram</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-500 dark:text-white">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 dark:text-white text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Cinema —
            <a
              href="https://twitter.com/developbharat"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-white ml-1"
              target="_blank"
            >
              @developbharat
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500 dark:text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500 dark:text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500 dark:text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500 dark:text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
