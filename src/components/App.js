import { CardDetails } from "./CardDetails";
import { CardImage } from "./CardImage";
import { CardProfile } from "./CardProfile";

export default function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f4d04e]">
      <div className=" bg-white p-6 w-[327px] sm:w-[24rem] rounded-[1.25rem] border-solid border-[1px] border-black shadow-[8px_8px_0_#000000]">
        <CardImage />
        <CardDetails />
        <CardProfile />
      </div>
    </div>
  );
}
