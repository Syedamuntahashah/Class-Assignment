import React from "react";
function Navbar(){
    return (
       <nav className="flex justify-around items-center h-10 bg-blue-600">
        <div className="bg-black h-2 w-10"></div>
          <div className="bg-orange-600  h-2 w-20"></div>
           <div>
           <ul className="flex justify-around items-center h-10">
                <li className="bg-red-600 h-2 w-10"></li>
                <li className="bg-purple-500 h-2 w-10"></li>
                <li className="bg-slate-400 h-2 w-10"></li>
                <li className="bg-slate-600 h-2 w-10"></li>
                <li className="bg-slate-400 h-2 w-10"></li>
            </ul>
            </div>
       </nav>
    )
}
export default Navbar;