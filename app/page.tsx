import { IoEarthOutline, IoPlanetOutline } from "react-icons/io5";

import { moredya } from "@/app/fonts";
import { GiStripedSun } from "react-icons/gi";
import { TbTemperature } from "react-icons/tb";
import { Earth } from "../components/planets/models/earth";

export default function Home() {
  return (
    <div className="w-screen h-screen tems-center bg-black">
      <Earth />

      <div className="w-[50vw] flex flex-col justify-center p-10 h-screen absolute left-0 top-0">
        <h1 className={`${moredya.className} text-[12vh] text-white`}>Mars</h1>
        <div className="flex items-center justify-start space-x-8">
          <div className="flex items-center gap-3 justify-start ">
            <GiStripedSun className="text-neutral-500 text-3xl" />
            <div className="flex flex-col items-start justify-start ">
              <p className="text-white text-sm">43,3 Million km</p>
              <p className="text-neutral-400 font-medium text-sm  ">
                from the Sun
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-start ">
            <IoEarthOutline className="text-neutral-500 text-3xl" />
            <div className="flex flex-col items-start justify-start ">
              <p className="text-white text-sm">64,2 Eearth Years</p>
              <p className="text-neutral-400 font-medium text-sm  ">
                length of year
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start space-x-8 mt-6">
          <div className="flex items-center gap-3 justify-start ">
            <IoPlanetOutline className="text-neutral-500 text-3xl" />
            <div className="flex flex-col items-start justify-start ">
              <p className="text-white text-sm">12,742 km</p>
              <p className="text-neutral-400 font-medium text-sm  ">diameter</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-start ">
            <TbTemperature className="text-neutral-500 text-3xl" />
            <div className="flex flex-col items-start justify-start ">
              <p className="text-white text-sm">-94°C to 427°C</p>
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
      </div>
      <div className="absolute flex items-center justify-between w-full bottom-0 right-0 p-10">
        <div className="flex flex-col items-start justify-start">
          <p className="text-neutral-500 font-medium text-sm">Planet Type</p>
          <p className="text-white text-2xl">Terrestrial</p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="text-neutral-500 font-medium text-sm">Satellites</p>
          <p className="text-white text-2xl">80</p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="text-neutral-500 font-medium text-sm">Inclination</p>
          <p className="text-white text-2xl">7,231231°</p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="text-neutral-500 font-medium text-sm">
            Orbital Velocity
          </p>
          <p className="text-white text-2xl">9,69 km/s</p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="text-neutral-500 font-medium text-sm">
            Sideral Circulation Period
          </p>
          <p className="text-white text-2xl">10 794,22 days</p>
        </div>
      </div>
    </div>
  );
}
