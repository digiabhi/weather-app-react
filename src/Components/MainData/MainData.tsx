import HighlightRow from "./HighlightRow"
import TopRow from "./TopRow"
import WeekRow from "./WeekRow"

function MainData() {
  return (
    <div className="flex flex-col justify-between py-4 items-center basis-9/12 text-black bg-[#f6f6f8] h-full rounded-br-3xl rounded-tr-3xl">
      <TopRow/>
      <WeekRow/>
      <div>
        Today's Highlights
      </div>
      <HighlightRow/>
    </div>
  )
}

export default MainData