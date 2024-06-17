// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props

  const {id, name, teamImageUrl} = teamDetails

  return (
    <li>
      <div className="team-cantainer">
        <div className="team-card">
          <Link to={`/team/${id}`}>
            <img src={teamImageUrl} alt={name} className="team-img" />
            <p className="team-heading">{name}</p>
          </Link>
        </div>
      </div>
    </li>
  )
}

export default TeamCard
