import Dropdown from './Dropdown'
import Image from './Image'

export default function Header() {
  return (
    <header id="primary-header" className="horizontal-padding">
      <nav>
        <ul id="nav-list">
          <li>
            <a id="attri" href="/">
              <Image
                id="logo"
                imgSrc="assets/images/attri-logo-sm.png"
                altText="Attri Enterprises Inc. Logo"
              />
              <span id="company-name"> Attri Enterprises</span>
            </a>
          </li>
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

                <Dropdown />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}
