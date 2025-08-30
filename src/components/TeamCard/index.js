import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = ({teamName, teamImage, teamId}) => {
  return (
    <Link to={`/team/${teamId}`} className="team-card-link">
      <div className="team-card">
        <img src={teamImage} alt={teamName} className="team-logo" />
        <h3>{teamName}</h3>
      </div>
    </Link>
  )
}

export default TeamCard