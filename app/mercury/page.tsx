"use client";

import { IoEarthOutline, IoPlanetOutline } from "react-icons/io5";

import { moredya } from "@/app/fonts";
import { MercuryPlanet } from "@/components/planets/models/mercury";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { GiStripedSun } from "react-icons/gi";
import { TbTemperature } from "react-icons/tb";

export default function Mercury() {
  const marsRef = useRef(null);

  useGSAP(
    () => {
      const itemsLeft = gsap.utils.toArray(".info-left-item");
      const itemsBottom = gsap.utils.toArray(".info-bottom-item");
      const tl = gsap.timeline();
      gsap.from(".planet-title", {
        y: -100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      });

      itemsLeft.forEach((item, index) => {
        tl.from(item, {
          x: -100,
          opacity: 0,
        });
      });
      itemsBottom.forEach((item, index) => {
        tl.from(item, {
          y: 100,
          opacity: 0,
        });
      });
    },
    { scope: marsRef }
  );

  return (
    <div className="w-screen h-screen tems-center " ref={marsRef}>
      <div className="w-[30vw] flex flex-col justify-center p-10 h-screen absolute left-0 top-0">
        <MercuryPlanet />
        <h1
          className={`${moredya.className} text-[12vh] text-white planet-title`}
        >
          Jupiter
        </h1>
        <div className="flex items-center justify-start space-x-8">
          <div className="flex items-center gap-3 justify-start info-left-item">
            <GiStripedSun className="text-neutral-500 text-3xl" />
            <div className="flex flex-col items-start justify-start ">
              <p className="text-white text-sm">227.9 million km</p>
              <p className="text-neutral-400 font-medium text-sm  ">
                from the Sun
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-start info-left-item">
            <IoEarthOutline className="text-neutral-500 text-3xl" />
            <div className="flex flex-col items-start justify-start ">
              <p className="text-white text-sm">687 Earth days</p>
              <p className="text-neutral-400 font-medium text-sm  ">
                length of year
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start space-x-8 mt-6 ">
          <div className="flex items-center gap-3 justify-start info-left-item">
            <IoPlanetOutline className="text-neutral-500 text-3xl" />
            <div className="flex flex-col items-start justify-start ">
              <p className="text-white text-sm">6.779 kilometers</p>
              <p className="text-neutral-400 font-medium text-sm  ">diameter</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-start info-left-item">
            <TbTemperature className="text-neutral-500 text-3xl" />
            <div className="flex flex-col items-start justify-start ">
              <p className="text-white text-sm">-63°C to 20°C</p>
              <p className="text-neutral-400 font-medium text-sm  ">
                average temperature
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30vw] absolute h-screen flex flex-col justify-center right-0 top-0 p-10 ">
        <h2 className={`${moredya.className} text-[3vh] text-white indent-6`}>
          About Mars
        </h2>
        <p className="text-neutral-400  text-sm leading-7 indent-6">
          The fourth planet from the Sun and the second-smallest planet in the
          Solar System, being larger than only Mercury. In English, Mars carries
          a name of the Roman god of war and is often referred to as the
          &quot;Red Planet&quot;. The latter refers to the effect of the iron
          oxide prevalent on Mars&apos;s surface, which gives it a reddish
          appearance distinctive among the astronomical bodies visible to the
          naked eye.
        </p>
        <div className="flex gap-8 items-start flex-wrap justify-start mt-6 ">
          <div className="flex flex-col items-start justify-start">
            <p className="text-white text-md">Carbon Dioxide (CO₂)</p>
            <p className="text-neutral-400 text-2xl">95.32%</p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p className="text-white text-md">Nitrogen (N₂)</p>
            <p className="text-neutral-400 text-2xl">~2.7%</p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p className="text-white text-md">Argon (Ar)</p>
            <p className="text-neutral-400 text-2xl">~1.6%</p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p className="text-white text-md">Oxygen (O₂)</p>
            <p className="text-neutral-400 text-2xl">~0.13%</p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p className="text-white text-md">Carbon Monoxide (CO)</p>
            <p className="text-neutral-400 text-2xl">~0.08%</p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p className="text-white text-md">
              Other gases (water vapor, etc.)
            </p>
            <p className="text-neutral-400 text-2xl">trace amounts</p>
          </div>
        </div>
        <button
          className="mt-10 bg-transparent border border-neutral-300 text-white h-12 p-2
        hover:bg-white hover:text-black transition-all duration-300"
        >
          <span
            className={` uppercase font-light text-[1.8vh] tracking-widest`}
          >
            Explore Mars
          </span>
        </button>
      </div>
      <div className="absolute flex items-center justify-between w-full bottom-0 right-0 p-10">
        <div className="flex flex-col items-start justify-start info-bottom-item">
          <p className="text-neutral-500 font-medium text-sm">Planet Type</p>
          <p className="text-white text-2xl">Terrestrial</p>
        </div>
        <div className="flex flex-col items-start justify-start info-bottom-item">
          <p className="text-neutral-500 font-medium text-sm">Satellites</p>
          <p className="text-white text-2xl">2</p>
        </div>
        <div className="flex flex-col items-start justify-start info-bottom-item">
          <p className="text-neutral-500 font-medium text-sm">Inclination</p>
          <p className="text-white text-2xl">25,19°</p>
        </div>
        <div className="flex flex-col items-start justify-start info-bottom-item">
          <p className="text-neutral-500 font-medium text-sm">
            Orbital Velocity
          </p>
          <p className="text-white text-2xl">24 km/s</p>
        </div>
        <div className="flex flex-col items-start justify-start info-bottom-item">
          <p className="text-neutral-500 font-medium text-sm">
            Sideral Circulation Period
          </p>
          <p className="text-white text-2xl">24,6 hours</p>
        </div>
      </div>
    </div>
  );
}
