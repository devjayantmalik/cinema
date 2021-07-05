import React from "react";
import { Page } from "../components/layout";
import { MoviesList } from "../components/MoviesList";

export interface LatestMoviesProps {}

const LatestMovies: React.FC<LatestMoviesProps> = () => {
  return (
    <Page>
      <MoviesList title="Latest Movies" />
    </Page>
  );
};

export default LatestMovies;
