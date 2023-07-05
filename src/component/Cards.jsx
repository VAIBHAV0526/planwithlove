import React, { useState } from 'react'

export default function Cards(prop) {
    const  [readmor,setreadmore]=useState(false);
    const discrip=`${prop.info.substring(0,200)}.....`
    const [discript,setdiscript]=useState(discrip)
   
    function readmorhandle(){
        
        
        if(readmor===false){
            setdiscript(prop.info);
            setreadmore(true);
        }else{
            setdiscript(discrip);
            setreadmore(false);

        }

      
    }
    
  return (
    <div className='card'>


    <img  className="image" src={prop.image} alt={prop.name}></img>
<div className='tourDetails'>
<h4 className="tourPrice">{prop.price}</h4>
<h4 className="tourName">{prop.name}</h4>
</div>
<div className="description">
{discript}
<span className='readMore' onClick={readmorhandle}>
    {readmor ?'showless':'readmore'}
</span>
</div>
<button className='btnRed' onClick={()=>prop.removetour(prop.id)}> NOT INTRESTED</button>
    </div>
  )
}
