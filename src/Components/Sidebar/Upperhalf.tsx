import { AiOutlineSearch } from "react-icons/ai";
import CloudyNight from "../../Assets/CloudyNight.png";
function Upperhalf() {
  return (
    <div className="h-[50%] w-full p-4 flex flex-col justify-center items-start basis-[65%]">
      <div className="flex flex-start w-full mt-8">
        {/* Search bar Div */}
        <input placeholder="Search..." className="px-2 py-2 rounded-tl-md rounded-bl-md basis-[90%] bg-white text-black" type="text" />
        <button className="basis basis-[10%] text-white text-lg bg-sky-500 p-4 font-semibold rounded-tr-md rounded-br-md "><AiOutlineSearch /></button>
      </div>

      <div className="w-full h-[60%] flex justify-center mt-12">
        {/* Image Container */}
        <img src={CloudyNight} className="w-[60%] h-full" />
      </div>

      <div className="flex flex-col mt-4">
        {/* Temperature Data */}
        <div className="text-7xl text-black flex items-start">
          <div>25.7</div> <div className="text-5xl mt-1">°C</div>
        </div>
        <div className="text-black text-md"> Friday, 09:34</div>
      </div>
    </div>
  )
}

export default Upperhalf