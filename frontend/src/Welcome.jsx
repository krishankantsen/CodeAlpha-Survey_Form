import React, { useState } from 'react'
import './Welcome.css';


import {  useNavigate } from 'react-router-dom';


const Welcome = () => {
  const navigate=useNavigate()
  const [name,setname]=useState();
  const [email,setemail]=useState();

  return ( 
    <>
      <body>
      
        <h1 className='text-5xl mt-4 font-bold text-white text-center'>Welcome To Survey Form</h1>

        <div className=' h-96 mt-28  flex flex-col items-center justify-center w-90'>
         
          <p className='text-2xl text-white font-bold'>Name</p>
          <input type='text' name='name' className='h-12 w-80 text-white text-2xl rounded-md caret-white-500 bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 ' value={name}  onChange={(e)=>{setname(e.target.value)}} />
          <br />
          <p className='text-2xl text-white font-bold'>Enter Email Address</p>
          <input type='text'id='emi' name='email'className='h-12 text-white text-2xl w-80  bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100' value={email}  onChange={(e)=>{setemail(e.target.value)}} />
          <br />

          <button onClick={()=>{
          if(email=== "" || name==="")
          {
            alert("please add all the fields")
            return;
          }

          if(localStorage.getItem("email")=== email)
          {
            navigate("/alreadydone")
          }
          else{

          
            localStorage.setItem("email",email);
            localStorage.setItem("name",name);

            navigate("/ques");
          }
        }} className=' font-bold bg-slate-50
         h-auto text-1xl   rounded-2xl p-2  hover:bg-white-500 drop-shadow-2xl hover:bg-slate-300 hover:origin-top hover:rotate-2 ' >
            Start your Survey
          </button> 
        </div>
      </body>
    </>
  );
};

export default Welcome;
