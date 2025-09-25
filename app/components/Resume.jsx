import { desc, title } from "framer-motion/client";
import React from "react";
import { PiGraduationCapFill, PiStarFourFill } from "react-icons/pi";
const Resume = () => {
  const educationData = [
    {
      year: "2022 - 2026",
      title: "BSc in Computer Engineering",
      institution: "Altinbas University",
      description:
        "Relevant Coursework: Data Structures and Algorithms, Operating Systems, Database Systems, Computer Networks, Artificial Intelligence",
      // details: "Relevant Coursework: Data Structures and Algorithms, Operating Systems, Database Systems, Computer Networks, Machine Learning, Artificial Intelligence, Computer Vision, Natural Language Processing, Software Engineering, Web Development, Mobile App Development"
    },
  ];
  // work experience data
  const workData = [
    {
      year: "July 2024 - Aug 2024",
      title: "Software & Frontend Intern",
      company: "88ninety",
      description: [
        "Built full-stack features using .NET Core, SQL Server, and React.js.",
        "Collaborated in an agile team with code reviews and Figma-based UI design.",
      ],
    },
    {
      year: "Jan 2025 - Present",
      title: "Data Analysis & Frontend Intern",
      company: "Reachware",
      description: [
        "Created reports and visualized data through PowerBI.",
        "Developed features and debugged integration software using Next.js and React.",
      ],
    },
    {
      year: "June 2024 - July 2024",
      title: "Software Intern",
      company: "EAR Tech Information Technology",
      description: [
        "Developed and taught labs for AI Azure Studio services.",
        "Integrated Azure AI services into practical projects.",
      ],
    },
    {
      year: "March 2024 - April 2024",
      title: "Project Leader",
      company: "Ibtikar Assembly",
      description: [
        "Wrote test cases for automatic correction in the Ibtikar LMS platform.",
        "Contributed to PyTorch course automation and quality assurance.",
      ],
    },
  ];

  return (
    <section className="mt-12 pb-8" id="resume">
      <div className="text-center">
        <p className="text-content font-semibold inline-flex item-center grap-1 border-1 border-outer py-1.5 px-3 rounded-2xl mb-4">
          <PiStarFourFill className="text-lg" />
          Resume
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8">
          Education and Practical <br />
          experience
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-12">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-content mb-8">
            My education
          </h3>
          <div className="relative ">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 custom-gradient opacity-60"></div>
            <div>
              {educationData.map((item, index) => (
                <div
                  className="relative flex item-start space-x-6 pb-8"
                  key={index}
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-8 h-8 custom-gradient rounded-full flex items-center justify-center">
                      <PiGraduationCapFill className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-content">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mb-2">{item.institution}</p>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* work expirence */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-content mb-8">
            Work Experience
          </h3>
          <div className="relative ">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 custom-gradient opacity-60"></div>
            <div>
              {workData.map((item, index) => (
                <div
                  className="relative flex item-start space-x-6 pb-8"
                  key={index}
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-8 h-8 custom-gradient rounded-full flex items-center justify-center">
                      <PiGraduationCapFill className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-content">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mb-2">{item.company}</p>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
