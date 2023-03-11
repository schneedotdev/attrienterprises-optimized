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
      <iframe
        id="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1598792806067!2d-73.9394063!3d40.7144968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2595386ba027b%3A0x3ca7d28d840b6571!2sAttri%20Enterprises!5e0!3m2!1sen!2sus!4v1655103489470!5m2!1sen!2sus"
        loading="lazy"></iframe>
      <ContactInfo />
    </div>
  )
}
