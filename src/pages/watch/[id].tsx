import React from "react";
import { Page } from "../../components/layout";
import { PlayerSection } from "../../components/PlayerSection";

export interface WatchMovieProps {}

const WatchMovie: React.FC<WatchMovieProps> = () => {
  return (
    <Page>
      <PlayerSection />
    </Page>
  );
};

export default WatchMovie;
