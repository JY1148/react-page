import React, { useState } from "react";
import "./Accordion.css";

export default function Accordion() {
  const webName = "Marvel Hall of Fame";
  const exclude =
    "homepage logo, search page logo, loading spinning image, about page background image, privacy page background image";

  const questions = [
    {
      id: 1,
      question: `What is ${webName}?`,
      answer:
        "Good Question. This is a react webpage based on Marvel API fetching marvel heroes for our visitors in order to better display the marvelous charm of Marvel Heroes and Characters.",
    },
    {
      id: 2,
      question: "Who is the author of the website?",
      answer:
        "As far as I know, the author is one of the NEU students attending INFO 6150 Web Dev Courses in which Professor Brett taught fundamentals of front-end knowledge not limited to CSS, HTML and JS.",
    },
    {
      id: 3,
      question: "Is this web a Disney or Marvel official?",
      answer: `Is this kind of compliment? Of course not. All data shown in this web page originated from Marvel API (${exclude} not included). The website is just for academic experiment and personal interest use. There would be no ads or sponsorship. (Disney please do not sue me. I told the truth.)`,
    },
    {
      id: 4,
      question: "What kind of skills did you use in your website?",
      answer:
        "Well, proud to say that, the website implemented various kinds of complex UI fulfilled by CSS and React without external libraries imported. Like: (1) the accordion(great credit to the sample :D), (2) SPA route switch(great credit to the Zoom recordings), (3)search form view(well, there is room for improvement..)and (4)the favorite page with useEffect, useState and local stoarge... They all witness my time and effort investment in the final project.",
    },
    {
      id: 5,
      question: "How to send negative feedback to the author?",
      answer:
        "Sorry, since the incomplete development, we can only accept postive feedback. But we will try to fix this problem soon!",
    },
    {
      id: 6,
      question: "I don't have more questions.",
      answer:
        "It is Okay. I think 6 accordions is better than 5. So let's just fake one more.",
    },
  ];

  const [isQuestionOpen, setIsQuestionOpen] = useState({});
  function toggleOpen(id) {
    setIsQuestionOpen({
      [id]: !isQuestionOpen[id],
    });
  }

  return (
    <div className="question">
      <div className="accordions-title" id="main">
        Fabulous Accordions Quested
      </div>
      {questions.map((question) => {
        return (
          <div
            key={question.id}
            id={question.id}
            className={`question-set ${
              isQuestionOpen[question.id] ? "question-open" : ""
            }`}
          >
            <button
              aria-expanded={isQuestionOpen[question.id] ? "true" : "false"}
              aria-controls={`answer${question.id}`}
              id={`questionbtn${question.id}`}
              className="question-title"
              onClick={() => toggleOpen(question.id)}
            >
              {question.question}
            </button>
            <div
              className="question-ans"
              id={`answer${question.id}`}
              role="region"
              aria-labelledby={`questionbtn${question.id}`}
            >
              {question.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
