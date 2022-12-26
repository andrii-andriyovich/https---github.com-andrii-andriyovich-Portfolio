import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <NavLink
        to="."
        end
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to="projects"
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
      >
        Projects
      </NavLink>
      <NavLink
        to="contacts"
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
      >
        Contacts
      </NavLink>
    </nav>
  )
}

export default Navbar
