import { IoEarthOutline, IoPlanetOutline } from "react-icons/io5";

import { GiStripedSun } from "react-icons/gi";
import { TbTemperature } from "react-icons/tb";

export const SunDistance = ({ distance }: { distance: string }) => {
  return (
    <div className="flex items-center gap-3 justify-start info-left-item">
      <GiStripedSun className="text-neutral-500 text-3xl" />
      <div className="flex flex-col items-start justify-start ">
        <p className="text-white text-sm">{distance}</p>
        <p className="text-neutral-400 font-medium text-sm  ">from the Sun</p>
      </div>
    </div>
  );
};

export const YearLength = ({ length }: { length: string }) => {
  return (
    <div className="flex items-center gap-3 justify-start info-left-item">
      <IoEarthOutline className="text-neutral-500 text-3xl" />
      <div className="flex flex-col items-start justify-start ">
        <p className="text-white text-sm">{length}</p>
        <p className="text-neutral-400 font-medium text-sm  ">length of year</p>
      </div>
    </div>
  );
};

export const Diameter = ({ diameter }: { diameter: string }) => {
  return (
    <div className="flex items-center gap-3 justify-start info-left-item">
      <IoPlanetOutline className="text-neutral-500 text-3xl" />
      <div className="flex flex-col items-start justify-start ">
        <p className="text-white text-sm">{diameter}</p>
        <p className="text-neutral-400 font-medium text-sm  ">diameter</p>
      </div>
    </div>
  );
};

export const AvgTemp = ({ temp }: { temp: string }) => {
  return (
    <div className="flex items-center gap-3 justify-start info-left-item">
      <TbTemperature className="text-neutral-500 text-3xl" />
      <div className="flex flex-col items-start justify-start ">
        <p className="text-white text-sm">{temp}</p>
        <p className="text-neutral-400 font-medium text-sm  ">
          average temperature
        </p>
      </div>
    </div>
  );
};
