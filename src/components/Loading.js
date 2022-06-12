import { Spinner } from "flowbite-react";
const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-600">
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    </div>
  );
};

export default Loading;
