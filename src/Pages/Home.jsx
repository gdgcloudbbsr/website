import AboutUs from "../Layouts/AboutUs";
import Banner from "../Layouts/Banner";
import EventsSection from "../Layouts/EventsSection";
import GalleryBanner from "../Layouts/GalleryBanner";
import GallerySection from "../Layouts/GallerySection";
import Hero from "../Layouts/Hero";
// import TeamSection from "../Layouts/TeamSection";
import WhatGDG from "../Layouts/WhatGDG";
import WorkshopsSection from "../Layouts/WorkshopsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <WhatGDG />
      <AboutUs />
      <GalleryBanner />
      <EventsSection />
      <WorkshopsSection />
      <Banner />
      {/* <TeamSection /> */}
      <GallerySection />
    </>
  );
};

export default Home;
