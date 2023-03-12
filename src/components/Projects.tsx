import { useState } from 'preact/hooks'
import Image from './Image'
import { projectData, ProjectProps } from '../data/projectData'

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
