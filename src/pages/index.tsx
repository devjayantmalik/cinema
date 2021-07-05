import { NextPage } from "next";
import React from "react";
import { Page } from "../components/layout";
import { MoviesList } from "../components/MoviesList";
import { ReleasesYearsSection } from "../components/ReleasesYearsSection";
import { SearchSection } from "../components/SearchSection";
import { Subscribe } from "../components/Subscribe";
import { NavigationUrls } from "../utils/NavigationUrls";

const Home: NextPage = (props) => {
  return (
    <Page>
      <SearchSection />
      <MoviesList
        title="Latest Releases"
        moreHref={NavigationUrls.latest_releases}
      />
      <MoviesList title="Most Popular" />
      <Subscribe />
      <ReleasesYearsSection />
    </Page>
  );
};

export default Home;
