import React, { Suspense, useState } from "react";
import "./App.css";
import type { Memory, Photo } from "./types";
import SectionHeader from "./components/SectionHeader";
import LoveMeter from "./components/LoveMeter";
import AnimatedBackgroundHearts from "./components/AnimatedBackgroundHearts";
import ConfettiHearts from "./components/ConfettiHearts";
import SectionSkeleton from "./components/SectionSkeleton";

const Timeline = React.lazy(() => import("./components/Timeline"));
const PhotoGrid = React.lazy(() => import("./components/PhotoGrid"));
const LoveLetter = React.lazy(() => import("./components/LoveLetter"));

const memories: Memory[] = [
  {
    year: "2019",
    title: "The day it all started 💫",
    description:
      "When we met and had no idea how important we’d become to each other.",
  },
  {
    year: "2020",
    title: "Our silly lockdown calls 📱",
    description:
      "Hours of late‑night calls, bad jokes, and realizing we’re actually perfect together.",
  },
  {
    year: "2021",
    title: "First trip together ✈️",
    description:
      "New city, new memories, the same butterflies as day one.",
  },
  {
    year: "2022",
    title: "We became home 🏡",
    description:
      "Realizing that ‘home’ isn’t a place, it’s a person. And that person is you.",
  },
  {
    year: "2023",
    title: "Our quiet little moments 🤍",
    description:
      "Coffee, sunsets, and the kind of peace that only exists when you’re near.",
  },
  {
    year: "2024",
    title: "Still choosing you, every day 💍",
    description:
      "Five years in, and somehow I love you more than ever.",
  },
];

const galleryPhotos: Photo[] = [
  {
    src: "/my3.jpg",
    caption: "Our little universe.",
  },
  {
    src: "/my1.jpg",
    caption: "You, my favorite view.",
  },
  {
    src: "/my5.jpg",
    caption: "Every sunset is better with you.",
  },
  {
    src: "/my2.jpg",
    caption: "That laugh I’m obsessed with.",
  },
  {
    src: "/my4.jpg",
    caption: "Our walks that never feel long enough.",
  },
  {
    src: "/my6.jpg",
    caption: "The quiet moments I never post, but never forget.",
  },
];

const App: React.FC = () => {
  const [loveLevel, setLoveLevel] = useState<number>(5);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const handleHeartClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 1200);
  };

  return (
    <div className="page">
      <AnimatedBackgroundHearts />
      {showConfetti && <ConfettiHearts />}

      <header className="hero">
        <div className="brand-mark">mylo</div>
        <div className="hero-content">
          <p className="hero-kicker">For my favorite human</p>
          <h1 className="hero-title">
            5 years of
            <span className="hero-gradient"> us</span>
          </h1>
          <p className="hero-subtitle">
            This little corner of the internet is just for you. No filters, no
            fancy poses. Just our story, our chaos, and all the reasons I’m
            still stupidly in love with you.
          </p>
        </div>
      </header>

      <main>
        <section id="meter" className="section section-meter">
          <LoveMeter
            loveLevel={loveLevel}
            setLoveLevel={setLoveLevel}
          />
        </section>

        <section id="story" className="section section-story">
          <SectionHeader
            eyebrow="Our timeline"
            title="The little moments that became everything"
            subtitle="Swipe through the years. Every card is a tiny piece of our story that made me fall even harder."
          />
          <Suspense fallback={<SectionSkeleton variant="timeline" />}>
            <Timeline memories={memories} />
          </Suspense>
        </section>

        <section id="gallery" className="section section-gallery">
          <SectionHeader
            eyebrow="Photo corner"
            title="Just us, being us"
            subtitle="Not perfect, not staged. Just snapshots of the chaos I never want to live without."
          />
          <Suspense fallback={<SectionSkeleton variant="gallery" />}>
            <PhotoGrid photos={galleryPhotos} />
          </Suspense>
        </section>

        <section id="note" className="section section-note">
          <SectionHeader
            eyebrow="A tiny love letter"
            title="Dear you,"
            subtitle="Here’s everything I never say enough, all in one place."
          />
          <Suspense fallback={<SectionSkeleton variant="note" />}>
            <LoveLetter />
          </Suspense>
        </section>
      </main>

      <footer className="footer">
        <p>
          Made with way too much love by{" "}
          <span className="footer-highlight">your person</span> ·{" "}
          <span className="footer-heart">♥</span>
        </p>
      </footer>
    </div>
  );
};
export default App;
