const Menu = () => {
  return (
    <div className="dropdown-menu">
      <ul className="mobile-list">
        <li>
          <a className="link-hover" href="#profile">
            Profile
          </a>
        </li>
        <li>
          <a className="link-hover" href="#history">
            History
          </a>
        </li>
        <li>
          <a className="link-hover" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="link-hover" href="#awards">
            Awards
          </a>
        </li>
        <li>
          <a className="link-hover" href="#contact-info">
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

export default function Dropdown() {
  return (
    <div className="dropdown-container">
      <div className="dropdown" data-dropdown>
        <button className="dropdown-button" aria-label="dropdown-button">
          <i
            aria-hidden
            id="menu-icon"
            data-dropdown-button
            className="fa fa-bars fa-xl"></i>
        </button>

        <Menu />
      </div>
    </div>
  )
}
