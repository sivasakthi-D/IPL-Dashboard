import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [teamsData, setTeamsData] = useState([])

  const getTeams = async () => {
    const response = await fetch(teamsApiUrl)
    const fetchedData = await response.json()

    const formattedData = fetchedData.teams.map(team => ({
      name: team.name,
      id: team.id,
      teamImageURL: team.team_image_url,
    }))

    setTeamsData(formattedData)
    setIsLoading(false)
  }

  useEffect(() => {
    getTeams()
  }, [])

  const renderTeamsList = () => (
    <ul className="teams-list">
      {teamsData.map(team => (
        <TeamCard key={team.id} teamDetails={team} />
      ))}
    </ul>
  )

  const renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  return (
    <div className="home-route-container">
      <div className="teams-list-container">
        <div className="ipl-dashboard-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? renderLoader() : renderTeamsList()}
      </div>
    </div>
  )
}

export default Home
