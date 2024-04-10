"use client";

import {
  AvgTemp,
  Diameter,
  SunDistance,
  YearLength,
} from "@/components/main-infos";
import { useRef, useState } from "react";

import { zebulon } from "@/app/fonts";
import AboutPlanet from "@/components/about-planet";
import BottomInfo from "@/components/bottom-info";
import Composition from "@/components/composition";
import LinkBtn from "@/components/link-btn";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { CgClose } from "react-icons/cg";
import { Mars } from "../components/planets/models/mars";

export default function Home() {
  const marsRef = useRef(null);
  const [isOpenedFact, setIsOpenedFact] = useState(false);
  useGSAP(
    () => {
      const itemsLeft: HTMLElement[] = gsap.utils.toArray(".info-left-item");
      const itemsBottom: HTMLElement[] =
        gsap.utils.toArray(".info-bottom-item");
      const tl = gsap.timeline();
      gsap.from(".planet-title", {
        y: -100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      });

      itemsLeft.forEach((item) => {
        tl.from(item, {
          x: -100,
          opacity: 0,
        });
      });
      itemsBottom.forEach((item) => {
        tl.from(item, {
          y: 100,
          opacity: 0,
        });
      });
    },
    { scope: marsRef }
  );

  const handleFacts = () => {
    const tl = gsap.timeline();
    const listItems: HTMLElement[] = gsap.utils.toArray(".facts-list-item");
    if (!isOpenedFact) {
      setIsOpenedFact(true);
      tl.to(".facts-modal", {
        x: 0,
        duration: 0.5,
        ease: "back.out(.7)",
      });
      listItems.forEach((item, index) => {
        tl.from(item, {
          opacity: 0,
          x: -100,
          duration: 0.3,
          ease: "power4.out",
        });
      });
    } else {
      handleCloseFacts();
    }
  };

  const handleCloseFacts = () => {
    if (isOpenedFact) {
      gsap.to(".facts-modal", {
        x: "-100%",
        duration: 0.5,
        ease: "back.in(.7)",
        onComplete: () => {
          setIsOpenedFact(false);
        },
      });
    }
  };

  return (
    <div className="w-screen h-screen tems-center " ref={marsRef}>
      <div id="stars" className="opacity-30"></div>
      <div
        className="absolute facts-modal w-[20vw] h-full bottom-0
      transform -translate-x-full flex flex-col ga
      p-10 overflow-y-auto  bg-neutral-900/90 backdrop-blur-xl z-[110] "
      >
        <div className="flex flex-col items-start gap-10 ">
          <div className="flex items-start justify-between w-full relative gap-4">
            <h3 className="text-neutral-300 text-2xl  font-bold ">
              Facts about Mars
            </h3>
            <button
              className="bg-transparent outline-none border-none text-white focus:outline-none"
              onClick={handleCloseFacts}
            >
              <CgClose className="text-2xl" />
            </button>
          </div>
          <ul className="flex flex-col items-start gap-4 list-disc list-inside">
            <li className="text-neutral-400 text-md facts-list-item">
              Mars is the fourth planet from the Sun and the second-smallest
              planet in the Solar System, being larger than only Mercury.
            </li>
            <li className="text-neutral-400 text-md facts-list-item">
              In English, Mars carries the name of the Roman god of war and is
              often referred to as the &apos;Red Planet&apos;.
            </li>
            <li className="text-neutral-400 text-md facts-list-item">
              The days and seasons are similar to those on Earth, but they last
              longer.
            </li>
            <li className="text-neutral-400 text-md facts-list-item">
              Mars has the largest volcano in the Solar System, Olympus Mons.
            </li>
            <li className="text-neutral-400 text-md facts-list-item">
              Mars has two moons, Phobos and Deimos.
            </li>
          </ul>
        </div>
      </div>
      <Mars />
      <div className="w-[30vw] flex flex-col justify-center p-10 h-screen absolute left-0 top-0">
        <h1
          className={`${zebulon.className} text-[12vh] text-white planet-title
          first-letter:text-[16vh]
          `}
        >
          Mars
        </h1>
        <div className="flex items-center justify-start space-x-8">
          <SunDistance distance="227.9 million km" />
          <YearLength length="687 days" />
        </div>
        <div className="flex items-center justify-start space-x-8 mt-6 ">
          <Diameter diameter="6,779 km" />
          <AvgTemp temp="-63°C to 20°C" />
        </div>
      </div>
      <div className="w-[30vw] absolute h-screen flex flex-col justify-center right-0 top-0 p-10 ">
        <AboutPlanet
          title="About Mars"
          description="Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'."
        />
        <div className="flex gap-8 items-start flex-wrap justify-start mt-6 ">
          <Composition
            compositions={[
              { name: "Carbon Dioxide (CO₂)", value: "95.32%" },
              { name: "Nitrogen (N₂)", value: "~2.7%" },
              { name: "Argon (Ar)", value: "~1.6%" },
              { name: "Oxygen (O₂)", value: "~0.13%" },
              { name: "Carbon Monoxide (CO)", value: "~0.08%" },
              {
                name: "Other gases (water vapor, etc.)",
                value: "trace amounts",
              },
            ]}
          />
        </div>
        <LinkBtn href="/mars" label="Mars News & Features" />
        <button
          onClick={handleFacts}
          className="bg-white text-neutral-900 h-12 p-2  uppercase font-light text-[1.8vh] tracking-widest mt-4 z-[101]
          hover:bg-neutral-100 focus:outline-none
          disabled:bg-neutral-400 disabled:cursor-not-allowed"
        >
          More Facts
        </button>

        <p className="text-neutral-400 text-sm mt-4">
          * All the information is based on the latest data from NASA.
        </p>
      </div>
      <div className="absolute flex items-center justify-between w-full bottom-0 right-0 p-10">
        <BottomInfo
          infos={[
            { name: "Planet Type", value: "Terrestrial" },
            { name: "Satellites", value: "2" },
            { name: "Inclination", value: "25,19°" },
            { name: "Orbital Velocity", value: "24 km/s" },
            { name: "Sideral Circulation Period", value: "24,6 hours" },
          ]}
        />
      </div>
    </div>
  );
}
