function TempCard({temperature, image, title}:{temperature:string, image:string, title:string}) {
  return (
    <div className="flex flex-col border bg-white p-2 h-[10rem] justify-between items-center rounded-3xl w-[7rem]">
        <div className="font-semibold text-lg">
            {title}
        </div>
        <div className="h-[40%]">
            <img className="h-full" src={image}/>
        </div>
        <div className="font-semibold text-lg">
            {temperature} °C
        </div>
    </div>
  )
}

export default TempCard