import clsx from "clsx";

interface propTypes {
  name: string;
  classname?: string;
}

const Btn = (props: propTypes) => {
  const { name, classname } = props;
  return (
    <button
      className={clsx(
        "md:w-[210px] xl:w-[360px] md:h-[52px] text-base bg-black rounded-full",
        classname
      )}
    >
      {name}
    </button>
  );
};

export default Btn;
