import React from "react";
import {Link} from "react-router-dom";


const Header =({username, repositoryName, user, setSearch})=> {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-orange-500 p-6">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <img src={user.avatar_url} alt=""width="50" className="mr-4 rounded" />
                <span className="font-semibold text-xl tracking-tight">GITHUB</span>
                <div className="search" >
                    <input type="text"  className="bg-gray-400 mx-48 rounded" onChange={(e)=>setSearch(e.target.value)}/>
                </div>
            </div>
            <div className="block lg:hidden">

                <button
                    type="button"
                    className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
                <div className="text-sm ">
                    <Link
                        to="/"
                       className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                        Main
                    </Link>
                    {
                        repositoryName &&
                        <Link
                        to={`/${username}`}
                        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white">
                        Repositories
                    </Link>
                    }
                </div>
        </nav>
    )
}


export default Header