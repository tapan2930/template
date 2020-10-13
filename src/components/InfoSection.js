import React from "react";
import HighLights from "./Highlights";
import MyButton from "./MyButton";

const play = (<svg className="w-3 font-bold text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg>)

const InfoSection = ({title, summary, highlights}) => {
  return (
    <div className="bg-indigo-700 px-5 md:px-0 md:pl-20">
      <div className="w-full md:w-3/5">
        <h1 className="text-white text-4xl mb-5 pt-5 capitalize">{title}</h1>
        <p className="text-white mb-5">{summary}</p>
        <div className="text-white flex mb-5 flex-col md:flex-row">
          {highlights.map((highlight, index) => (
            <div className="mr-0 md:mr-6"><HighLights key={index} value={highlight} /></div>
          ))}
        </div>
        <div className="pb-5"><MyButton icon={play} value={"Start course"} /></div> 
      </div>

    </div>
  );
};

export default InfoSection;
