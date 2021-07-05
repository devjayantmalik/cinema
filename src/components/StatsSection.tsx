import React from "react";

export interface StatsSectionProps {}

export const StatsSection: React.FC<StatsSectionProps> = () => {
  return (
    <section className="section">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
            Our Records
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some stats about platform, we care for our users and want
            to support each and everyone. <br />
            If you don't like something or have some new feature ideas or just
            want to say hello, <br />
            feel free to do so, via or feedback form. <br />
            We are always here to help you out, in case of any query,
            <br />
            feel free to send us email at:{" "}
            <a href="mailto:prod.jayantmalik@gmail.com?subject=Cinema">
              prod.jayantmalik@gmail.com
            </a>
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="currentColor"
                stroke="currentColor"
                className="dark:text-white text-gray-400 w-12 h-12 mb-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <defs />
                <path d="M490.667 112V0h-160v176h-32v96H160v96H21.333v144h432V176H346.667v-64h144zm-144-96h128v80h-128V16zM176 288h122.667v26.667H176V288zM37.333 384H160v26.667H37.333V384zm400 112h-400v-69.333H160v34.667h16V330.667h122.667v56h16v-152h122.667V496zm0-304v26.667H314.667V192h122.666z" />
                <path d="M413.333 32h37.333v16h-37.333zM370.667 64h80v16h-80zM194.667 58.667v16h44.686L39.677 274.342l11.313 11.316L250.667 85.981V120h16V58.667zM50.667 442.667H72v16H50.667zM125.333 442.667h21.333v16h-21.333zM189.333 346.667h21.333v16h-21.333zM264 346.667h21.333v16H264zM328 250.667h21.333v16H328zM402.667 250.667H424v16h-21.333z" />
              </svg>

              <h2 className="title-font font-medium text-3xl">25.7K</h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="currentColor"
                stroke="currentColor"
                className="dark:text-white text-gray-400 w-12 h-12 mb-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <defs />
                <path d="M511.459 197.567c-1.218-3.674-4.331-6.401-8.134-7.124l-157.256-29.888-80.778-143.122c-1.891-3.354-5.443-5.424-9.289-5.424h-.064c-3.871.023-7.426 2.141-9.288 5.534l-77.018 140.32-161.08 32.605c-3.794.768-6.874 3.531-8.049 7.22-1.174 3.689-.258 7.723 2.394 10.544l109.656 116.603-18.775 163.27c-.443 3.846 1.233 7.629 4.378 9.887 1.845 1.325 4.025 2 6.22 2 1.547 0 3.1-.336 4.548-1.019l144.789-68.256 149.478 68.31c3.519 1.608 7.636 1.183 10.755-1.11 3.117-2.292 4.748-6.096 4.261-9.936l-20.172-158.794 111.156-121.049c2.616-2.851 3.485-6.897 2.268-10.571zM378.972 318.403c-2.124 2.313-3.121 5.444-2.726 8.56l18.38 144.693-136.55-62.403c-1.408-.642-2.921-.964-4.433-.964-1.554 0-3.109.339-4.549 1.019l-131.931 62.195 17.151-149.149c.358-3.12-.675-6.239-2.827-8.527L31.57 207.576l147.148-29.785c3.078-.622 5.723-2.57 7.234-5.322l70.18-127.859 73.791 130.744c1.544 2.734 4.213 4.65 7.299 5.237l143.292 27.234-101.542 110.578z" />
                <path d="M331.588 212.091c-1.1 5.788 2.7 11.372 8.488 12.471l75.992 14.445c.673.128 1.342.19 2.003.19 5.021 0 9.495-3.563 10.469-8.678 1.1-5.788-2.7-11.372-8.488-12.471l-75.992-14.445c-5.784-1.1-11.37 2.698-12.472 8.488zM309.755 218.804l.375.073c.688.133 1.373.198 2.048.198 5.004 0 9.469-3.537 10.459-8.633 1.125-5.784-2.651-11.383-8.434-12.509l-.375-.073c-5.785-1.125-11.384 2.652-12.508 8.435-1.124 5.784 2.652 11.383 8.435 12.509zM318.15 277.014l-34.889-6.629-17.97-31.842c-1.891-3.353-5.443-5.424-9.289-5.424h-.064c-3.871.022-7.426 2.141-9.288 5.535l-17.089 31.133-35.834 7.252c-3.794.768-6.874 3.532-8.049 7.221-1.176 3.688-.258 7.723 2.393 10.544l24.33 25.872-4.176 36.322c-.443 3.846 1.234 7.629 4.379 9.887 3.146 2.257 7.268 2.632 10.769.981l32.122-15.145 33.25 15.198c1.417.648 2.929.965 4.433.965 2.238 0 4.459-.703 6.323-2.074 3.118-2.294 4.749-6.098 4.262-9.938l-4.475-35.229 24.729-26.93c2.619-2.851 3.486-6.898 2.269-10.571-1.22-3.679-4.333-6.405-8.136-7.128zm-37.927 33.842c-2.124 2.312-3.121 5.444-2.726 8.56l2.684 21.128-20.323-9.289c-1.409-.643-2.922-.965-4.436-.965-1.554 0-3.109.339-4.549 1.019l-19.265 9.083 2.553-22.199c.359-3.12-.675-6.239-2.825-8.526l-14.593-15.518 21.904-4.431c3.078-.623 5.724-2.571 7.235-5.323l10.248-18.672 10.983 19.463c1.544 2.735 4.215 4.65 7.301 5.237l20.923 3.976-15.114 16.457z" />
              </svg>
              <h2 className="title-font font-medium text-3xl">1.6K</h2>
              <p className="leading-relaxed">Movies</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="currentColor"
                stroke="currentColor"
                className="dark:text-white text-gray-400 w-12 h-12 mb-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 485 485"
              >
                <defs />
                <path d="M84.803 356.872c27.516 0 49.901-22.386 49.901-49.902s-22.386-49.902-49.901-49.902-49.901 22.386-49.901 49.902 22.385 49.902 49.901 49.902zm0-69.803c10.974 0 19.901 8.928 19.901 19.902s-8.928 19.902-19.901 19.902-19.901-8.928-19.901-19.902 8.927-19.902 19.901-19.902zM84.803 385.041C38.042 385.041 0 423.084 0 469.844v15h169.605v-15c0-46.76-38.042-84.803-84.802-84.803zm-52.716 69.803c6.539-22.95 27.697-39.803 52.716-39.803s46.177 16.854 52.716 39.803H32.087zM400.197 356.872c27.516 0 49.901-22.386 49.901-49.902s-22.386-49.902-49.901-49.902-49.901 22.386-49.901 49.902 22.386 49.902 49.901 49.902zm0-69.803c10.974 0 19.901 8.928 19.901 19.902s-8.928 19.902-19.901 19.902-19.901-8.928-19.901-19.902 8.928-19.902 19.901-19.902zM400.197 385.041c-46.761 0-84.803 38.042-84.803 84.803v15H485v-15c0-46.76-38.042-84.803-84.803-84.803zm-52.716 69.803c6.539-22.95 27.697-39.803 52.716-39.803s46.177 16.854 52.716 39.803H347.481zM242.5 99.959c27.516 0 49.901-22.386 49.901-49.902S270.016.156 242.5.156s-49.901 22.386-49.901 49.902 22.385 49.901 49.901 49.901zm0-69.803c10.974 0 19.901 8.928 19.901 19.902S253.473 69.96 242.5 69.96s-19.901-8.928-19.901-19.902 8.927-19.902 19.901-19.902zM327.303 212.931c0-46.761-38.042-84.803-84.803-84.803s-84.803 38.042-84.803 84.803v15h169.605v-15zm-137.519-15c6.539-22.95 27.697-39.803 52.716-39.803s46.177 16.854 52.716 39.803H189.784zM257.5 330.939v-68.123h-30v68.123L168.504 365l15 25.981 58.996-34.062 58.996 34.062 15-25.981z" />
              </svg>
              <h2 className="title-font font-medium text-3xl">62.1K</h2>
              <p className="leading-relaxed">Visitors</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="currentColor"
                stroke="currentColor"
                className="dark:text-white text-gray-400 w-12 h-12 mb-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 60"
              >
                <defs />
                <path d="M56.5 49V1c0-.6-.4-1-1-1h-45c-.6 0-1 .4-1 1v14h2V2h43v46h-9c-.6 0-1 .4-1 1v9h-33V43h-2v16c0 .6.4 1 1 1h35c.3 0 .5-.1.7-.3l10-10c.1-.1.1-.2.2-.3v-.1c.1-.1.1-.2.1-.3zm-10 1h6.6l-3.3 3.3-3.3 3.3V50z" />
                <path d="M16.5 38h10v-2h-3V17c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v6h-5c-.6 0-1 .4-1 1v4h-5c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h12zm1-20h4v18h-4V18zm-6 7h4v11h-4V25zm-6 5h4v6h-4v-6zM50.5 24V7c0-.6-.4-1-1-1h-21c-.6 0-1 .4-1 1v17c0 .6.4 1 1 1h21c.6 0 1-.4 1-1zm-2-12h-12V8h12v4zm-14-4v4h-5V8h5zm-5 6h5v9h-5v-9zm7 9v-9h12v9h-12zM28.5 28h21v2h-21zM28.5 33h21v2h-21zM28.5 38h21v2h-21zM14.5 6h6v2h-6zM14.5 11h9v2h-9zM14.5 43h7v2h-7zM24.5 43h7v2h-7zM34.5 43h7v2h-7zM14.5 48h7v2h-7zM24.5 48h7v2h-7zM34.5 48h7v2h-7zM14.5 53h7v2h-7zM24.5 53h7v2h-7zM34.5 53h7v2h-7z" />
              </svg>

              <h2 className="title-font font-medium text-3xl">1.3K</h2>
              <p className="leading-relaxed">Feedbacks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
