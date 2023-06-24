import $ from 'jquery';
import React, { useState, useEffect } from 'react';


export default function Iam(){

    const [me, setMe] = useState("D");
    const named = ["Web Developer","Freelancer"];
    let name_index = 0;
    let start = 0;
    let  number_of_items = named.length
  
    useEffect(() => {
      const interval = setInterval(title, 400);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    function title() {
      name_index = name_index + 1;
      setMe(`${named[start].slice(0, name_index)} `);
  
      if (name_index === named[start].length) {
        name_index = 0;
        start++;
        if (start >= number_of_items){
            start=0
        }
      }
    }



    return(
        <div className="iam">
            <h1>I am Jephthah</h1>
            <h2><strong>{me}</strong></h2><br/>
        </div>
    )
}