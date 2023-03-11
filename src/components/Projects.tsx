import { useState, useEffect } from 'react'
import Image from './Image'

type ProjectProps = {
  location: string
  imgSrc: string
}

const projectData: ProjectProps[] = [
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
    <div className="slide">
      <h3 className="project-title">{location}</h3>
      <Image imgSrc={imgSrc} altText="Roofing Project Image" />
    </div>
  )
}

const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  function handlePrevClick() {
    setActiveSlide((activeSlide - 1 + projectData.length) % projectData.length)
  }

  function handleNextClick() {
    setActiveSlide((activeSlide + 1) % projectData.length)
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
          location={projectData[activeSlide].location}
          imgSrc={projectData[activeSlide].imgSrc}
        />
      </div>
    </section>
  )
}

export default Projects
