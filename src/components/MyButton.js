import React from 'react';

const MyButton = ({icon, value}) => {
    return ( 
    <button className="inline-flex outline-none focus:outline-none text-white font-bold rounded p-2 bg-indigo-500 cursor-pointer shadow-lg hover:shadow-xl">{value}</button>
     );
}
 
export default MyButton;