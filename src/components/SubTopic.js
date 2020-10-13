import React from 'react';

const SubTopic = ({subtopic}) => {
    const thumbnail = "https://via.placeholder.com/150"
    return ( 
        <div className="inline-flex cursor-default w-full border-b align-middle">
            <img className="w-16" src={thumbnail} alt="thumbnail"/><h3 className="py-4 px-5">{subtopic}</h3>
        </div>
     );
}
 
export default SubTopic;