import { useState, useEffect } from 'react'

type ProjectProps = {
  location: string
  imgSrc: string
}

const projects: ProjectProps[] = [
  {
    location: 'NYC Department of Sanitation - Chelsea, NY',
    imgSrc: './assets/projects/proj-3.jpg'
  },
  {
    location:
      'NYC Department of Parks & Recreation - Betsy Head Park, Brownville, NY',
    imgSrc: './assets/projects/proj-8.jpg'
  },
  {
    location: 'Con Edison - Astoria, NY',
    imgSrc: './assets/projects/proj-9.jpg'
  },
  {
    location: 'NYC Department of Parks & Recreation - Staten Island, NY',
    imgSrc: './assets/projects/proj-10.jpg'
  },
  {
    location: 'Con Edison - Astoria, NY',
    imgSrc: './assets/projects/proj-7.jpg'
  },
  {
    location: 'Roosevelt Island Operating Corporation - Roosevelt Island, NY',
    imgSrc: './assets/projects/proj-6.jpg'
  },
  {
    location: 'Con Edison - Corona, NY',
    imgSrc: './assets/projects/proj-5.jpg'
  }
]

const Project = ({ location, imgSrc }: ProjectProps) => {
  return (
    <li className="slide">
      <h3 className="project-title">{location}</h3>
      <img src={imgSrc} alt="Roofing Project Image" />
    </li>
  )
}

const Slides = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  function handlePrevClick() {
    setActiveSlide((activeSlide - 1 + projects.length) % projects.length)
  }

  function handleNextClick() {
    setActiveSlide((activeSlide + 1) % projects.length)
  }

  return (
    <section
      id="projects"
      className="horizontal-padding"
      aria-label="Project Carousel">
      <h2 id="projects-title" className="section-title">
        Projects
      </h2>

      <div className="carousel neumorphism">
        <button className="carousel-button prev" onClick={handlePrevClick}>
          &#8249;
        </button>
        <button className="carousel-button next" onClick={handleNextClick}>
          &#8250;
        </button>

        <Project
          location={projects[activeSlide].location}
          imgSrc={projects[activeSlide].imgSrc}
        />
      </div>
    </section>
  )
}

export default Slides
