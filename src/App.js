import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/PassChar';

function App() {

let [uppercase,setUppercase] = useState(false)  //state create.1
let [lowercase,setLowercase] = useState(false)//state create.
let [number,setNumber] = useState(false)//state create.
let [symbols,setSymbols] = useState(false)//state create.
let [passworldlen,setpassworldLen] = useState(10)//state create password.
let [fPass,setFpass] = useState('')//state create password. final output k liye.
 



let createPassword = ()=> {   //is a function create. is function ko btn niche hai pr call kara denge.
  let finalPass=''
let charSet=''//create variable.

    if(uppercase || lowercase || number || symbols){ //condition apply .  
         if(uppercase) charSet+=UC; //CONDITON check karna hai .phir if condition pass karna hai. 
         if(lowercase) charSet+=LC; //CONDITON check karna hai .phir if condition pass karna hai. 
         if(number) charSet+=NC; //CONDITON check karna hai .phir if condition pass karna hai. 
         if(symbols) charSet+=SC; //CONDITON check karna hai .phir if condition pass karna hai. 
       
         for(let i=0;i<passworldlen;i++){ //ye loop autni baar chalega jitnibaar "let [passworldlen,setpassworldLen] = useState(10)" states me fill kiya hoga 9times loop chalega...
             finalPass +=charSet.charAt(Math.floor(Math.random()*charSet.length))// 1.finalpass crate karenge  2.charAt use karenge jisse carret se data lega  3.math.floor use karenge to to output me aggar 4.9 aata hai to 4 lega   4.math.random() use karenge to haar haar eak random valuu dega.  5. *charSet.length) charset.length*number ko multiple karke dega.


         }
         setFpass( finalPass) //print kara denge final output ko on input text par.

  }
  else{
    alert("Please on CheckBox!...... ")
  }
}

let copyPass = ()=>{    //is a function create.
  navigator.clipboard.writeText(fPass) //ye use karenge to copy ho jayega.
  alert("Copied password Successfully ")
}
  return (
    <>
      <div className='passwordBox'>

        <h2>Password Generator App</h2>
        <div className='passwordBoxin'>
          <input type='text' readOnly value={fPass} /><button onClick={copyPass}>Copy</button>
        </div>

        <div className='passlengh'>
          <label>Password Length</label>
          <input type='number' value = {passworldlen} onChange={(event)=>setpassworldLen(event.target.value)} max={20}  min={6} />
        </div>

        <div className='passlengh'>
          <label>Include Uppercase Letters</label>
          <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)  }/>
        </div>

        <div className='passlengh'>
          <label>Include Lowercase Letters</label>
          <input type='checkbox' checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
        </div>

        <div className='passlengh'>
          <label>Include Numbers</label>
          <input type='checkbox'checked={number} onChange={()=>setNumber(!number)} />
        </div>

        <div className='passlengh'>
          <label>Include Symbol</label>
          <input type='checkbox'checked={symbols} onChange={()=>setSymbols(!symbols)} />
        </div>
 <button className='btn' onClick={createPassword}>Generate Password</button>
      </div>
    </>
  );
}

export default App;
