import Image from './Image'

const ContactInfo = () => {
  return (
    <section id="contact-info">
      <h3 id="contact">Contact</h3>
      <ul className="footer-list">
        <li className="footer-list-margin">
          <p>
            892 Metropolitan Ave
            <br />
            Brooklyn, NY, 11211
          </p>
        </li>
        <li className="footer-list-margin">
          <a className="link-hover" href="tel:718-486-7395">
            (718)-486-7395
          </a>
        </li>
        <li>
          <a className="link-hover" href="mailto:office@attrienterprises.com">
            Office@AttriEnterprises.com
          </a>
        </li>
      </ul>
    </section>
  )
}

export default function Contact() {
  return (
    <div className="row footer-neumorphism">
      {/* Google Maps Location */}
      <a
        id="map-link"
        href="https://goo.gl/maps/6LHqZymPPTZ6F4mf8"
        aria-label="link to google maps listing for Attri Enterprises">
        <span id="view-larger">View larger map</span>
        <Image
          id="map"
          imgSrc="assets/images/map-preview.png"
          altText="Preview of google maps"
        />
      </a>

      <ContactInfo />
    </div>
  )
}
