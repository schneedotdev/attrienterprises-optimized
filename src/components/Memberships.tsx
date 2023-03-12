import Image from './Image'
import { membershipData, MembershipProps } from '../data/membershipData'

const Membership = ({ imgSrc, altText }: MembershipProps) => {
  return <Image imgSrc={imgSrc} altText={altText} />
}

export default function Memberships() {
  return (
    <section id="memberships" className="horizontal-padding">
      <h2 className="section-title">Associations and Memberships</h2>

      <div id="membership-logos" className="row">
        {membershipData.map(({ imgSrc, altText }, i) => {
          return <Membership key={i} imgSrc={imgSrc} altText={altText} />
        })}
      </div>
    </section>
  )
}
