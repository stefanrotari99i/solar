const BottomInfo = ({ infos = [] }: { infos: any[] }) => {
  return (
    <div className="absolute flex items-center justify-between w-full bottom-0 right-0 p-10">
      {infos.map((info, index) => (
        <div
          className="flex flex-col items-start justify-start info-bottom-item"
          key={index}
        >
          <p className="text-neutral-500 font-medium text-sm">{info.name}</p>
          <p className="text-white text-2xl font-medium">{info.value}</p>
        </div>
      ))}
    </div>
  );
};

export default BottomInfo;
