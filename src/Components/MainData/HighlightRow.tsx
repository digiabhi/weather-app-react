import { useSelector } from "react-redux"
import HighlightCard from "../HighlightCard"
import ReduxState from '../../Interfaces/ReduxState';
function HighlightRow() {
  const currentData = useSelector((state:ReduxState)=>state.forecast.data.currentData);
  function uvRange() {
    if(currentData.uv<=5) return "Low";
    else if(currentData.uv> 5 && currentData.uv <= 8) return "Moderate";
    else return "High";
  }
  return (
    <div className="flex flex-wrap gap-6 px-12 py-2">
        <HighlightCard title="UV Index" data={currentData.uv.toString()} footer={uvRange()}/>
        <HighlightCard title="Wind Status" data={currentData.wind_kmph.toString()} footer="km/h"/>
        <HighlightCard title="Humidity" data={currentData.humidity.toString() + "%"} footer="Low"/>
        <HighlightCard title="Visiblity" data={currentData.vis_km.toString()} footer="Low"/>
        <HighlightCard title="Sunrise & Sunset" data={currentData.sunrise.toString()} footer={currentData.sunset.toString()}/>
        <HighlightCard title="Air Quality" data={currentData.aqi.toString()} footer="Low"/>
    </div>
  )
}

export default HighlightRow