import { awardData, AwardProps } from '../data/awardData'

const Award = ({ name, link, presenter, year }: AwardProps) => {
  return (
    <li className="award-list-margin">
      <p>
        {link ? (
          <a href={link} className="award link-hover" target="_blank">
            {name}
          </a>
        ) : (
          <span className="color-black">{name}</span>
        )}
        {' – '}
        <span className="award-presenter">{presenter}</span>
        <span className="award-year"> ({year})</span>
      </p>
    </li>
  )
}

export default function Awards() {
  return (
    <section id="awards" className="column center horizontal-padding">
      <h2 className="section-title">Awards Received</h2>

      <ul className="award-list">
        {awardData.map(({ name, link, presenter, year }, i) => {
          return (
            <Award
              key={i}
              name={name}
              link={link}
              presenter={presenter}
              year={year}
            />
          )
        })}
      </ul>
    </section>
  )
}
