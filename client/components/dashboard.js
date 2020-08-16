import React, {useEffect, useState} from 'react'
import {Route,useParams} from "react-router-dom";
import axios from "axios";
import Readme from "./readme";
import Repolist from "./repo-list";
import Header from "./header";


const Dashboard = () => {
  const { username, repositoryName }=useParams()
  const [repos, setRepos] = useState([])
  const [readme, setReadme] = useState('')
  const [error, setError] = useState('')
    const [user,setUser]=useState({})
    const [search, setSearch]=useState("")

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}/repos`).then(({ data }) => setRepos(data))
        axios.get(`https://api.github.com/users/${username}`).then(({ data }) => setUser(data))
    const headers = { Accept: 'application/vnd.github.VERSION.raw+json' }
   if(repositoryName){
     axios
         .get(`https://api.github.com/repos/${username}/${repositoryName}/readme`, { headers })
         .then(({ data }) => setReadme(data))
         .catch((err) => setError(err.message))
   }
  }, [repositoryName, username])
  if (error) {
    return <div>{error}</div>
  }
  return (
    <div>
      <Header username={username} repositoryName={repositoryName} user={user} setSearch={setSearch}/>
       <div className=" container mx-auto mt-6">
         <Route exact path="/:username" component={() => <Repolist repos={repos} username={username} search={search}/>} />
         <Route exact path="/:username/:repositoryName" component={() => <Readme readme={readme} />} />
       </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default React.memo(Dashboard)
