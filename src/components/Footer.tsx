import Image from './Image'
import Contact from './Contact'

const AttriInfo = () => {
  return (
    <section className="column">
      <Image
        id="footer-logo"
        imgSrc="assets/images/attri-logo-sm.png"
        altText="Attri Enterprises Inc. Logo"
      />
      <h5 id="footer-name">Attri Enterprises</h5>
      <span id="attri-description">Roofing General Contractors</span>
      <span id="footer-copyright">&copy; Copyright 2022 Attri Enterprises</span>
    </section>
  )
}

export default function Footer() {
  return (
    <footer id="primary-footer" className="horizontal-padding">
      <AttriInfo />
      <Contact />
    </footer>
  )
}
