type CertificationProps = {
  imgSrc: string
  altText: string
}

const certData = [
  {
    imgSrc: './assets/certified-roofing-systems/kemco-logo.png',
    altText: 'Kemco Systems logo'
  },
  {
    imgSrc: './assets/certified-roofing-systems/johns-manville-logo.png',
    altText: 'Johns Manville logo'
  },
  {
    imgSrc: './assets/certified-roofing-systems/carlisle-logo.png',
    altText: 'Carlisle Syntec Systems logo'
  }
]

const Certification = ({ imgSrc, altText }: CertificationProps) => {
  return <img src={imgSrc} alt={altText} />
}

export default function Certifications() {
  return (
    // Includes a collection of Attri Enterprises Certifications
    <section id="certifications" className="horizontal-padding">
      <h2 className="section-title">Certified Roofing Systems</h2>

      <div id="systems-logos" className="row">
        {certData.map(({ imgSrc, altText }) => {
          return <Certification imgSrc={imgSrc} altText={altText} />
        })}
      </div>
    </section>
  )
}
