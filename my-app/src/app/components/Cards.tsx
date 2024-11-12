function Cards(){
    return (
<div className="flex flex-col gap-4 p-4">
    <div className="flex flex-row gap-4 p-4 justify-center">
            <div className="bg-red-200 shadow-2xl rounded-lg h-72 w-72"> </div>
            <div className="bg-red-300 shadow-2xl rounded-lg h-72 w-72"></div> 
    </div> 
    <div className="flex flex-row gap-4 justify-center">
        <div className="bg-slate-500 shadow-2xl rounded-lg h-72 w-72"></div>
        <div className="bg-slate-600 shadow-2xl rounded-lg h-72 w-72"></div>
        <div className="bg-slate-300 shadow-2xl rounded-lg h-72 w-72"></div>
    </div>  
</div>           
        
    )
}

export default Cards;