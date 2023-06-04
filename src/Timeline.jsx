import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import React from "react";
import { FaDownload, FaFilePdf } from "react-icons/fa";

import { workExperiences } from "./constants";
import ResumePdfDocument from "./resume.pdf";
import JournalPdfDocument from "./journal.pdf";
import TranscriptPdfDocument from "./transcript.pdf";

const WorkExperience = ({ id }) => {
  return (
    <div className="work-exp" id={id}>
      <h1>Work Experience</h1>
      <a
        href={ResumePdfDocument}
        download="DeclanWalpoleResume.pdf"
        className="download-button"
      >
        <FaDownload className="download-icon" />
        <span>Download CV as PDF</span>
        <FaFilePdf className="pdf-icon" />
      </a>
      <Timeline>
        {workExperiences.map((experience) => (
          <TimelineItem
            key={experience.date}
            dateText={experience.date}
            style={{ color: "#e86971" }}
          >
            <h3>
              {experience.title}, {experience.company}
            </h3>
            <h4>{experience.subtitle}</h4>
            {experience.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </TimelineItem>
        ))}
      </Timeline>
      <a
        href={JournalPdfDocument}
        download="JournalQuantFinance.pdf"
        className="download-button"
      >
        <FaDownload className="download-icon" />
        <span>Quantitative Finance Publication</span>
        <FaFilePdf className="pdf-icon" />
      </a>
      <br></br>
      <br></br>
      <a
        href={TranscriptPdfDocument}
        download="DeclanWalpoleTranscript.pdf"
        className="download-button"
      >
        <FaDownload className="download-icon" />
        <span>University Transcript</span>
        <FaFilePdf className="pdf-icon" />
      </a>
    </div>
  );
};

export default WorkExperience;
