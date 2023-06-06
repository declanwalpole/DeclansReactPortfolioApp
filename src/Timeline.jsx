import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import React from "react";
import { FaDownload, FaFilePdf } from "react-icons/fa";

import { workExperiences } from "./constants";
import ResumePdfDocument from "./downloads/resume.pdf";
import JournalPdfDocument from "./downloads/journal.pdf";
import TranscriptPdfDocument from "./downloads/transcript.pdf";

const PdfDownload = ({ document, fileOutName, buttonText }) => {
  return (
    <a href={document} download={fileOutName} className="download-button">
      <FaDownload className="download-icon" />
      <span>{buttonText}</span>
      <FaFilePdf className="pdf-icon" />
    </a>
  );
};

const dateInnerStyle = { background: "#333", color: "#ffffff" };
const bodyContainerStyle = {
  background: "#ddd",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
};

const WorkExperience = ({ id }) => {
  return (
    <div className="work-exp" id={id}>
      <h1>Work History and Education</h1>
      <PdfDownload
        document={ResumePdfDocument}
        fileOutName="DeclanWalpoleResume.pdf"
        buttonText="Download CV as PDF"
      />
      <Timeline>
        {workExperiences.map((experience) => (
          <TimelineItem
            key={experience.date}
            dateText={experience.date}
            dateInnerStyle={dateInnerStyle}
            bodyContainerStyle={bodyContainerStyle}
          >
            <h3>
              {experience.title}, {experience.company}
            </h3>
            <h4>{experience.subtitle}</h4>
            {experience.paragraphs.map((paragraph, index) => (
              <p key={index} className="timeline-description">
                {paragraph}
              </p>
            ))}
          </TimelineItem>
        ))}
      </Timeline>
      <PdfDownload
        document={JournalPdfDocument}
        fileOutName="JournalQuantFinance.pdf"
        buttonText="Quantitative Finance Publication"
      />
      <br></br>
      <br></br>
      <PdfDownload
        document={TranscriptPdfDocument}
        fileOutName="DeclanWalpoleTranscript.pdf"
        buttonText="University Transcript"
      />
    </div>
  );
};

export default WorkExperience;
