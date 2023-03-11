type Award = {
  name: string
  link?: string
  presenter: string
  year: number
}

const awardData = [
  {
    name: 'Lucy G. Moses Preservation Award',
    link: 'https://nylandmarks.org/news/call-for-nominations-lucy-g-moses-preservation-awards-deadline-jan-8/',
    presenter: 'New York Landmark Conservancy',
    year: 1999
  },
  {
    name: 'Safety Award',
    presenter: 'Consolidated Edison Co. of New York',
    year: 2004
  },
  {
    name: 'Roofing Contractor Recycling Achievement, Bronze',
    link: 'https://nationwidefoamrecycling.com/recognition-program',
    presenter: 'Nationwide Foam, Inc.',
    year: 2010
  }
]

const Award = ({ name, link, presenter, year }: Award) => {
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
