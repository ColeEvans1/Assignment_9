import './App.css'
import CollegeBasketballTeams from './CollegeBasketballTeams.json'

function Header() {
  return (
    <>
    <h1>NCAA Basketball MADNESS!</h1>
    <h2>Learn more about the college basketball teams that make March, MAD!</h2>
    </>
  )
}

function TeamCard({school, name, city, state}: {school: string; name: string; city: string; state: string}) {
  return (
    <div className="team-card">
      <h3>The {school} {name}</h3>
      <p>📍 {city}, {state}</p>
    </div>
  )
}

function TeamList() {
  return (
    <div className="team-list">
      {CollegeBasketballTeams.teams.map((singleTeam) => (
        <TeamCard key={singleTeam.tid} {...singleTeam}/>
      ))}
    </div>
  )
}


function App() {


  return (
    <>
    <Header/>
    <TeamList/>
    </>
  )
}

export default App
