import Image from './Image'
import { certData, CertificationProps } from '../data/certData'

const Certification = ({ imgSrc, altText }: CertificationProps) => {
  return <Image imgSrc={imgSrc} altText={altText} />
}

export default function Certifications() {
  return (
    <section id="certifications" className="horizontal-padding">
      <h2 className="section-title">Certified Roofing Systems</h2>

      <div id="systems-logos" className="row">
        {certData.map(({ imgSrc, altText }, i) => {
          return <Certification key={i} imgSrc={imgSrc} altText={altText} />
        })}
      </div>
    </section>
  )
}
