import React from 'react';
import './LastPage.css'
import { useNavigate } from "react-router-dom";

export default function LastPage() {
  const navigate = useNavigate()
  const responsearr = localStorage.getItem("response");
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const submitresponse= () =>{
    //synthetic event
      //fetching data from url 
      
      fetch("https://code-alpha-survey-form-tan.vercel.app/submit", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          //sending data to backend
          body: JSON.stringify({ name:name,email:email,response:responsearr })
      }).then(res => res.json()).then(data => {
        
        if(data.message)
        {
          console.log("success")
          localStorage.setItem("submitted","true");
          navigate("/thankyou");              
        }
        else{
            console.log("error saving data");    
      }
    });
  }


  return (
    <div className=' flex flex-col items-center justify-center'>
          <h1 className=' mx-2 mt-40 font-bold text-center text-5xl text-white  '>Survey is completed Click Submit Button to Submit the Response</h1>
         <button className='  mt-20 font-bold bg-white w-auto
         h-auto text-3xl  border-2 rounded-xl p-2  hover:drop-shadow-xl  ' onClick={submitresponse}>Submit</button>

    </div>
  )
}
