import React, { useState, useEffect } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
      console.log(`change`);
  },[count])
       
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <h1>Hooks: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>

    </div>
  );
};
export default Hooks;
