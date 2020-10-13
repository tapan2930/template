import React from 'react';
import InfoSection from './components/InfoSection';
import TopicContainer from './components/TopicContainer';

const InfoData={
  title: "Software Engineering Interview Course",
  summary: "Our sotware engineering course helps you review the most important data structures, alogorithms and systhem design principles, with  detailed questions and anwsers.",
  highlights: ["30+ interactive class", "15+ real world problems", "python Solution"]
}

const topicData={
  data:[
    {
      title:"data Structure",
      summary:"A data structure is a particular way of organizing data in a computer so that it can be used effectively.",

      topics: [
    {
      title:"30+ interactive class",
      isCompleted: true,
      subSections: ["lession1", "lession2", "lession3", "lession4"] 
    },
    {
      title:"31+ interactive class",
      isCompleted: true,
      subSections: ["lession1", "lession2", "lession3", "lession4"] 
    },
    {
      title:"32+ interactive class",
      isCompleted: true,
      subSections: ["lession1", "lession2", "lession3", "lession4"] 
    }]
},{
  title:"data Structure",
  summary:"A data structure is a particular way of organizing data in a computer so that it can be used effectively.",

  topics: [
{
  title:"30+ interactive class",
  isCompleted: false,
  subSections: ["lession1", "lession2", "lession3", "lession4"] 
},
{
  title:"31+ interactive class",
  isCompleted: false,
  subSections: ["lession1", "lession2", "lession3", "lession4"] 
},
{
  title:"32+ interactive class",
  isCompleted: false,
  subSections: ["lession1", "lession2", "lession3", "lession4"] 
}]
},{
  title:"data Structure",
  summary:"A data structure is a particular way of organizing data in a computer so that it can be used effectively.",

  topics: [
{
  title:"30+ interactive class",
  isCompleted: false,
  subSections: ["lession1", "lession2", "lession3", "lession4"] 
},
{
  title:"31+ interactive class",
  isCompleted: false,
  subSections: ["lession1", "lession2", "lession3", "lession4"] 
},
{
  title:"32+ interactive class",
  isCompleted: false,
  subSections: ["lession1", "lession2", "lession3", "lession4"] 
},
{
  title:"32+ interactive class",
  isCompleted: false,
  subSections: ["lession1", "lession2", "lession3", "lession4"] 
},{
  title:"32+ interactive class",
  isCompleted: false,
  subSections: ["lession1", "lession2", "lession3", "lession4"] 
}]
}]
}

function App() {
  return (
    <div className="bg-gray-200">
     <InfoSection {...InfoData} />
     {
       topicData.data.map((topics,index)=>(
         <div className="md:w-3/4 mt-10">
        <TopicContainer key={index} {...topics}/>
         </div>
       ))
     }
    </div>
  );
}

export default App;
