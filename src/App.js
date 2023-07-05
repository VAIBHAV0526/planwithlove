
import './App.css';
import React from 'react'
import { useState } from 'react';
import data from './data';
import Tours  from './component/Tours';
function App() {

  const [tours, settours] = useState(data);
function removetour(id){
const newtour=tours.filter((tour)=>tour.id!==id);
settours(newtour);
}
function datarest(){
  settours(data);
}
if(tours.length===0){
return(
  <div className='refresh'>

    <h1>no more tours left</h1>
    <button onClick={datarest}> REFRESH</button>
  </div>
)
}
  return (
<div className='app'>
<Tours tours={tours} removetour={removetour}></Tours>
</div>
  );
}

export default App;
