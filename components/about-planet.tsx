const AboutPlanet = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <h2 className={`uppercase font-bold text-[2.2vh] text-white indent-6`}>
        {title}
      </h2>
      <p className="text-neutral-400  text-md leading-7 indent-6">
        {description}
      </p>
    </>
  );
};

export default AboutPlanet;
