import React, { useState } from "react";
import SubTopic from "./SubTopic";
import Ticker from "./Ticker";

const Topic = ({ topic, subtopics, isCompleted }) => {
  const [isSubTopics, setSubTopic] = useState(true);
  return (
    <div className=" cursor-pointer  w-full removeTint">
      <div className="inline-flex w-full border-b md:hover:bg-gray-200  transition duration-100 ease-out">
        <div className=" md:mr-5 p-5">
          <Ticker isTicked={isCompleted} name={Math.random()} />
        </div>

        <h3 className="py-5 w-full" onClick={() => setSubTopic(!isSubTopics)}>
          {topic}
        </h3>
      </div>
      <div className={isSubTopics && "hidden"}>
        {subtopics.map((subtopic, index) => (
          <div
            className=" hover:bg-gray-300 transition duration-100 ease-out"
            key={index}
          >
            <SubTopic subtopic={subtopic} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topic;
