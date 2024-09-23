import { PropsInputTag } from "./types/type";

const InputTag = ({ placeholder, handelChange, value }: PropsInputTag) => {
  return (
      <input
        type="number"
        value={value}
        onChange={(e) => handelChange(e.target.value)}
        placeholder={placeholder}
        className="p-2 border rounded"
      />
  );
};

export default InputTag;
