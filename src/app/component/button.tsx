import clsx from "clsx";

interface propTypes {
  name: string;
  classname?: string;
  onClick?: () => void;
}

const Btn = (props: propTypes) => {
  const { name, classname, onClick } = props;
  return (
    <button
    onClick={onClick}
    // xl:w-[360px]
      className={clsx(
        "md:w-[210px] md:h-[52px] text-base bg-black rounded-full",
        classname
      )}
    >
      {name}
    </button>
  );
};

export default Btn;
