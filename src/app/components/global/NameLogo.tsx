const NameLogo = ({
  className,
  onClick,
}: {
  className: string;
  onClick: () => void;
}) => {
  // const handleClick = () => {
  //   onClick();
  // };
  return (
    <div
      onClick={() => onClick()}
      className={`${className} cursor-pointer font-waterlily`}
    >
      <span className="text-brand-pink">A</span>
      <span className="text-brand-blue">R</span>
      <span className="text-brand-green">T</span>
      <span className="text-brand-yellow"> </span>
      <span className="text-brand-blue">K</span>
      <span className="text-brand-yellow">A</span>
      <span className="text-brand-green">R</span>
      <span className="text-brand-pink">T</span>
    </div>
  );
};

export default NameLogo;
