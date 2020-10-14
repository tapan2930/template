import React, {useState} from 'react';

const Ticker = ({isTicked, name}) => {
  const [isTick, setTick] = useState(isTicked)

    return ( 
        <label className="round"><span className="invisible">"</span>
        <input type="checkbox" name={name} checked={isTick} onChange={()=>setTick(!isTick)}/>
        <span className="checkmark"></span>
      </label>

     );
}
 
export default Ticker;