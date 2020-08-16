import React from 'react'
import { Link } from 'react-router-dom'
import HashLoader from "react-spinners/HashLoader"

const Repolist = ({repos, username, search}) => {
    const filteredRepos=repos.filter(el=>el.name.includes(search))
    if (!repos.length){
        return(
            <div className="flex justify-center items-center">
            <HashLoader size={100} color="#fff" />
            </div>
        )
    }
  return (
      <div className="text-white ">
        <div className="flex ">
          <div className="w-1/3 ">название репозитория</div>
          <div className="w-1/3 ">кол-во форков</div>
          <div className="w-1/3 ">посмотреть</div>
        </div>
        {filteredRepos.map((el) => (
          <div key={el.name} className="flex hover:text-blue-300">
            <div className="w-1/3">{el.name}</div>
            <div className="w-1/3">{el.forks}</div>
            <div className="w-1/3" >
              <Link to={`/${username}/${el.name}`}  >View readme</Link>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Repolist
