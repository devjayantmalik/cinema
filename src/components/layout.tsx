import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export interface PageProps {}

export const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
