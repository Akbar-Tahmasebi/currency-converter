import { PropsButtonTag } from "../types/type";

const Button = ({ title, handelClick }: PropsButtonTag) => {
  return (
    <button
      onClick={handelClick}
      className="ml-2 p-2 w-32 bg-blue-500 text-white rounded"
    >
      {title}
    </button>
  );
};

export default Button;
