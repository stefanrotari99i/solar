const Composition = ({ compositions = [] }: { compositions: any[] }) => {
  return (
    <div className="flex gap-8 items-start flex-wrap justify-start mt-6 ">
      {compositions.map((composition, index) => (
        <div className="flex flex-col items-start justify-start" key={index}>
          <p className="text-neutral-200 font-bold text-xl">
            {composition.value}
          </p>
          <p className="text-neutral-400 text-sm">{composition.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Composition;
