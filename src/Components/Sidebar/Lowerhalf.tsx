import { AiFillCloud } from "react-icons/ai"
import { BsDropletFill } from "react-icons/bs"
import { MdLocationPin } from "react-icons/md"

function Lowerhalf() {
  return (
    <div className="h-[50%] w-full p-4 flex flex-col justify-between">
      <div className="flex flex-col">
        {/* Precipitation */}
        <div className="flex items-center gap-4 my-2 text-small">
          <div>
            <AiFillCloud/>
          </div>
          <div>
            Partially Cloudy
          </div>
        </div>
        <div className="flex items-center gap-4 my-2 text-small">
          <div>
            <BsDropletFill/>
          </div>
          <div>
            Perc - 10%
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
      {/* Location */}
      <div><MdLocationPin/></div>
      <div>Bengaluru, KA, India</div>
      </div>
    </div>
  )
}

export default Lowerhalf