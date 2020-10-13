import React from "react";

const TopicTitle = ({ title, summary }) => {
  return (
    <div>
      <h1 className="font-bold capitalize text-gray-900 text-xl mb-2">{title}</h1>
      <h3 className="text-gray-700 text-sm mb-2">{summary}</h3>
    </div>
  );
};

export default TopicTitle;
