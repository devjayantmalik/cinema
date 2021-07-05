import React from "react";

export interface MovieInfoCardProps {}

export const MovieInfoCard: React.FC<MovieInfoCardProps> = () => {
  return (
    <section className="section">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center text-gray-400 dark:text-white">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 328.863 328.863"
                >
                  <defs />
                  <path d="M104.032 220.434V131.15h-20.64v-22.88h49.121v112.164h-28.481zM239.552 137.23c0 9.76-5.28 18.4-14.08 23.201 12.319 5.119 20 15.84 20 28.32 0 20.16-17.921 32.961-45.921 32.961-28.001 0-45.921-12.641-45.921-32.48 0-12.801 8.32-23.682 21.28-28.801-9.44-5.281-15.52-14.24-15.52-24 0-17.922 15.681-29.281 40.001-29.281 24.64 0 40.161 11.68 40.161 30.08zm-59.042 49.122c0 9.441 6.721 14.721 19.041 14.721s19.2-5.119 19.2-14.721c0-9.279-6.88-14.561-19.2-14.561-12.321 0-19.041 5.281-19.041 14.561zm2.881-47.522c0 8.002 5.76 12.48 16.16 12.48s16.16-4.479 16.16-12.48c0-8.318-5.76-12.959-16.16-12.959-10.401 0-16.16 4.641-16.16 12.959z" />
                  <path d="M292.864 120.932c4.735 13.975 7.137 28.592 7.137 43.5 0 74.752-60.816 135.568-135.569 135.568s-135.57-60.816-135.57-135.568c0-74.754 60.816-135.568 135.569-135.568 14.91 0 29.527 2.4 43.5 7.137V5.832C193.817 1.963 179.24 0 164.432 0 73.765 0 .001 73.764.001 164.432s73.764 164.432 164.431 164.432 164.43-73.764 164.43-164.432c0-14.807-1.962-29.385-5.831-43.5h-30.167z" />
                  <path d="M284.659 44.111V12.582h-22.672v31.529h-31.34v22.67h31.34v31.528h22.672V66.781h31.527v-22.67z" />
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-lg">
                  The Adventure of Samurai Kid - The Final Fight
                </h2>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                Meggings portland fingerstache lyft, post-ironic fixie man bun
                banh mi umami everyday carry hexagon locavore direct trade art
                party. Locavore small batch listicle gastropub farm-to-table
                lumbersexual salvia messenger bag. Coloring book flannel
                truffaut craft beer drinking vinegar sartorial, disrupt fashion
                axe normcore meh butcher. Portland 90's scenester vexillologist
                forage post-ironic asymmetrical, chartreuse disrupt butcher
                paleo intelligentsia pabst before they sold out four loko. 3
                wolf moon brooklyn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
