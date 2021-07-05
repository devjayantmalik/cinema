import React from "react";
import { MovieInfoCard } from "./MovieInfoCard";
import { SimilarMovieCard } from "./SimilarMovieCard";

export interface PlayerSectionProps {}

export const PlayerSection: React.FC<PlayerSectionProps> = () => {
  return (
    <>
      <section className="section relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap max-h-screen">
          <div className="min-h-[50vh] lg:w-2/3 md:w-full sm:w-full bg-transparent rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
            <video
              src="/movie.mp4"
              controls
              className="w-full h-full absolute inset-0"
            ></video>
          </div>
          <div className="lg:w-1/3 lg:block md:hidden sm:hidden flex flex-col md:ml-auto w-full mt-8 md:mt-0 px-2 overflow-y-scroll">
            <SimilarMovieCard />
            <SimilarMovieCard />
            <SimilarMovieCard />
            <SimilarMovieCard />
            <SimilarMovieCard />
            <SimilarMovieCard />
            <SimilarMovieCard />
          </div>
        </div>
      </section>
      <MovieInfoCard />
    </>
  );
};
