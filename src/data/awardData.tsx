export type AwardProps = {
  name: string
  link?: string
  presenter: string
  year: number
}

export const awardData: AwardProps[] = [
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
