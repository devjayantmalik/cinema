import React from "react";
import { ContactUsSection } from "../components/ContactUsSection";
import { DevelopBharatSection } from "../components/DevelopBharatSection";
import { Page } from "../components/layout";
import { StatsSection } from "../components/StatsSection";

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <Page>
      <StatsSection />
      <ContactUsSection />
    </Page>
  );
};

export default About;
