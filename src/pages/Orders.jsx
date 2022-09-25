import React, { useState } from 'react'
import Acc from '../data/Acc.json';


function Orders() {
  const [query, setQuery] = useState("");
  console.log(query);

  return (
   
    <div className="box app pt-5 justify-content-center position-center text-center text-2xl ">
      <input
        type="text"
        placeholder="Search Orders"
        className="search bg-gray-200 border-zinc-900 p-5"
        onChange={e=> setQuery(e.target.value)}
      />
     
      {/* <img  key={Acc.id} src={Acc.product} alt="work" /> */}
      <ul className="list flex-col"> 
        {Acc &&
          Acc.map((acc) => (
            <li
              className="listItem flex-col p-16 ml-10"
              key={acc.id} >
              <img src={acc.product} alt="hi"/>
              {acc.type}
              <br />
              {acc.cost}
             
            </li>
          ))}
      </ul>
    </div>
  );
}


export default Orders


















