import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <h1>
        Hi, <br /> I'm Frontend developer
      </h1>
      <h2 className="skills">JavaScript / CSS / HTML</h2>
      <button className="contactButton">
        <Link to="contacts">Contact me</Link>
      </button>
    </div>
  )
}

export default Home
