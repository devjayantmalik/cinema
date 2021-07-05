import React from "react";

export interface SubscribeProps {}

export const Subscribe: React.FC<SubscribeProps> = () => {
  return (
    <section className="section">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium mb-4">
            Subscribe for alerts and updates.
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Provide us your email in case you want to receive important updates
            and notifications. <br />
            We don't send spam mails and we neither sell your data like others.
            <br />
            Give it a try and we promise, you won't regret it.
          </p>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <label
              htmlFor="full-name"
              className="label"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="input"
            />
          </div>
          <div className="relative flex-grow w-full">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input"
            />
          </div>
          <button className="btn btn-blue">Subscribe</button>
        </div>
      </div>
    </section>
  );
};
