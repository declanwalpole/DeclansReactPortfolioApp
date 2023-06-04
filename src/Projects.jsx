import React, { useState } from "react";
import { sideProjects } from "./constants";

const ExtraInfoCard = ({ additionalInfo }) => {
  return (
    <div className="extra-outer">
      <div className="extra-lhs">
        <h2>{additionalInfo.subtitle}</h2>
        <p>{additionalInfo.description}</p>
      </div>
      <div className="extra-rhs">
        <img src={additionalInfo.image} className="extra-img"></img>
      </div>
    </div>
  );
};

const ExtraInfoCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <ExtraInfoCard additionalInfo={slide} />
          </div>
        ))}
      </div>
      <button
        className="carousel-button carousel-button--prev"
        onClick={prevSlide}
      >
        Previous
      </button>
      <button
        className="carousel-button carousel-button--next"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [showMore, setShowMore] = useState(true);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="proj-card">
      <div className="proj-outer">
        <div className="proj-lhs">
          <h2>{project.title}</h2>
          <div className="skills">
            {project.tags.map((tag) => (
              <div className="skills_skill" key={tag}>
                {tag}
              </div>
            ))}
          </div>
          <div className="proj-para">
            {project.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {project.additionalInfo && (
            <button onClick={toggleShowMore}>
              {showMore ? "Hide product features" : "Explore product features"}
            </button>
          )}
        </div>
        <div className="proj-rhs">
          <img src={project.image} className="project-img"></img>
        </div>
      </div>
      {showMore && project.additionalInfo && (
        <div className="extra-section">
          <ExtraInfoCarousel slides={project.additionalInfo} />
        </div>
      )}
    </div>
  );
};

const Projects = ({ id }) => {
  return (
    <div className="proj-section" id={id}>
      <div className="proj-content">
        <h1>Projects</h1>
      </div>
      {sideProjects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};

export default Projects;
