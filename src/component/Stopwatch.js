import React, { useState } from 'react'

function Stopwatch() {
    const[time,setTime]=useState({hr:0,min:0,sec:0,milli:0})
    const[state,setSt]=useState(); //first one is current update data and second is update kaise krns hai kha krna hai// 
    let upHr=time.hr;
    let upMin=time.min;
    let upSec=time.sec;
    let upMilli=time.milli;
    
    const start=()=>{
     myfun();
     setSt(setInterval(myfun,10));
    }
    function stop(){
     clearInterval(state);
    }
    function reset(){
        clearInterval(state);
        setTime({hr:0,min:0,sec:0,milli:0})
    }
 const myfun=()=>{
    if(upMilli===100){
        upMilli=0;
        upSec++;
    }
    if(upSec===60){
        upSec=0;
        upMin++;
    }
    if(upMin===60){
        upMin=0;
        upHr++;
    }
    upMilli++;
   return setTime({hr:upHr,min:upMin,sec:upSec,milli:upMilli})
 }
  return (
    <div className='container'>
    <h1>{time.hr+" : "+time.min+" : "+time.sec+": "+time.milli} </h1>
    <div className='button'>
  <button className='start' onClick={start}>Start</button>
  <button className='stop' onClick={stop}>Stop</button>
  <button className='reset' onClick={reset}>Reset</button>
    </div>
    
      
    </div>
  )
}

export default Stopwatch
