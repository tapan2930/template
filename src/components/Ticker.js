import React, {useState} from 'react';

const Ticker = ({isTicked, name}) => {
  const [isTick, setTick] = useState(isTicked)

    return ( 
        <label class="round">
        <input type="checkbox" name={name} checked={isTick} onClick={()=>setTick(!isTick)}/>
        <span class="checkmark"></span>
      </label>
     );
}
 
export default Ticker;