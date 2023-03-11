import Image from './Image'

export default function Header() {
  return (
    <header id="primary-header" className="horizontal-padding">
      {/* Includes all navigation links and dropdown on mobile */}
      <nav>
        <ul id="nav-list">
          {/* Company Logo */}
          <li>
            <a id="attri" href="index.html">
              <Image
                id="logo"
                imgSrc="assets/images/attri-logo-sm.png"
                altText="Attri Enterprises Inc. Logo"
              />
              <span id="company-name"> Attri Enterprises</span>
            </a>
          </li>
          {/* Profile, History, Projects and Awards link to respective part of webpage */}
          <li>
            <ul id="inner-list">
              <li className="nav-padding hide-mobile">
                <a className="nav-link link-hover" href="#profile">
                  Profile
                </a>
              </li>
              <li className="nav-padding hide-mobile">
                <a className="nav-link link-hover" href="#history">
                  History
                </a>
              </li>
              <li className="nav-padding hide-mobile">
                <a className="nav-link link-hover" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-padding hide-mobile">
                <a className="nav-link link-hover" href="#awards">
                  Awards
                </a>
              </li>
              <li>
                <a
                  id="contact-btn"
                  className="nav-link hide-mobile"
                  href="#contact-info">
                  Contact
                </a>

                {/* Dropdown will appear on mobile and replace items on Navbar, functionality in js/dropdown.js */}
                <div className="dropdown-container">
                  <div className="dropdown" data-dropdown>
                    <button className="dropdown-button">
                      <i
                        id="menu-icon"
                        data-dropdown-button
                        className="fa fa-bars fa-xl"></i>
                    </button>

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
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}
