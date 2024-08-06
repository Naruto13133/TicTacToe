import React,{useState,useRef} from 'react'
import './Tictactoe.css'
import circleicon from '../assest/circle.png'
import crossicon from '../assest/cross.png'

let data =["","","","","","","","",""];



const Tictactoe = () => {

  let [count,setCount] = useState(0);
  let [lock,setLock] = useState(false);
  let titleRef = useRef(null);
  let box0 = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);

  let box_array=[box0,box1,box2,box3,box4,box5,box6,box7,box8];

const toggle =(e,num)=>
{
  if(lock){
    return 0;
  }
  if (count%2 === 0){
      e.target.innerHTML = `<img src='${crossicon}' >`;
      if(data[num] === ""){
      data[num] = "x";
      setCount(++count);
      }
  }
  else{
    e.target.innerHTML = `<img src='${circleicon}' >`;
    if(data[num] === ""){
      data[num] = "o";
      setCount(++count);
      }
}
checkwin();
}

  const checkwin =()=>{
      if (data[0] === data[1] && data[0] === data[2] && data[1]!==""){
        win(data[0]);
      }else if (data[3] === data[4] && data[3] === data[5] && data[3]!==""){
        win(data[3]);
      }else if (data[6] === data[7] && data[6] === data[8] && data[6]!==""){
        win(data[6]);
      }else if (data[0] === data[3] && data[0] === data[6] && data[0]!==""){
        win(data[7]);
      }else if (data[1] === data[4] && data[1] === data[7] && data[1]!==""){
        win(data[1]);
      }else if (data[2] === data[5] && data[8] === data[2] && data[2]!==""){
        win(data[2]);
      }else if (data[0] === data[4] && data[8] === data[0] && data[0]!==""){
        win(data[0]);
      }else if (data[2] === data[4] && data[2] === data[6] && data[2]!==""){
        win(data[2]);
      }    
  }

  const win =(winner)=>{
    setLock(true);
    if(winner === "x"){
      titleRef.current.innerHTML =  `Congratutlation : <img src='${crossicon}'>  Wins!`
    }else{
      titleRef.current.innerHTML =  `Congratutlation : <img src='${circleicon}'> Wins!`
    }
  }

  const reset =()=> {
    setLock(false);
    data =["","","","","","","","",""];
    titleRef.current.innerHTML = `Tic tac toe Game In<span>React</span>`;
    box_array.map((e)=>{e.current.innerHTML=""})
  }

  return (
    
    <div className='container' >
      <h1 className="title" ref={titleRef}>Tic tac toe Game In<span>React</span></h1>
    <div className='board'>
      <div className="row1">
        <div className="boxes" ref={box0} onClick={(e)=>{toggle(e,0)}}></div>  
        <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,1)}}></div>  
        <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,2)}}></div>  
      </div>
      <div className="row2">
        <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,3)}}></div>  
        <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,4)}}></div>  
        <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,5)}}></div>  
      </div>
      <div className="row3">
        <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,6)}}></div>  
        <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,7)}}></div>  
        <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,8)}}></div>  
      </div>

    </div>
    <button className='reset' onClick={reset}>Reset</button>
    </div>
  )
}

export default Tictactoe
