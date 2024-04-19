function HighlightCard({footer, data, title}:{footer:string, data:string, title:string}) {
    return (
      <div className="flex flex-col border bg-white p-2 h-[13rem] w-[18rem] justify-between items-center rounded-3xl">
          <div className="font-semibold text-lg w-full text-left ml-8 mt-2 text-gray-400">
              {title}
          </div>
          <div className="text-3xl font-semibold">
            {data}
          </div>
          <div className="text-sm w-full text-left ml-8 mb-2">
              {footer}
          </div>
      </div>
    )
  }
  
  export default HighlightCard