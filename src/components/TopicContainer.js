import React from "react";
import Topic from "./Topic";
import TopicTitle from "./TopicTitle";

const TopicContainer = ({ topics, title,summary }) => {
  return (
      <div className="mx-5 md:mx-20">
          <TopicTitle title={title} summary={summary} />
        <div className=" inline-display  bg-white shadow-lg rounded">
      {topics.map((topic, index) => (
            <Topic key={index} topic={topic.title} subtopics={topic.subSections} isCompleted={topic.isCompleted} />
      ))}
    </div>
      </div>

  );
};

export default TopicContainer;
