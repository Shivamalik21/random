import React from 'react'
import{useRef,useCallback,useState}from 'react'
const Body = () => {
   const[upper,setupper]=useState(true)
   const[Lower,setlower]=useState(true)
   const[Number,setnumber]=useState(true)
   const[Charcter,setcharacter]=useState(true)
   const[length,setlength]=useState(5)
   const[pass,setpass]=useState("")
   
   const data=useRef(null)
  const genrate=useCallback(()=>{
     const ABC="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     const abc=ABC.toLowerCase();
     const num="1234567890"
     const char="!@#$%^&*?/><"
    let str=""
     if(upper){
     str+=ABC
     }
     if(Lower){
    str+=abc
        }
        if(Number){
         str+=num
            }
            if(Charcter){
           str+=char
                }
                let Password = "";
                for (let i = 0; i < length; i++) {
                  const randomIndex = Math.floor(Math.random() *str.length);
                  Password += str[randomIndex]; 
                     
                } 
                setpass(Password)  
  },[Number,Charcter,upper,Lower,length])
  
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Random password</h1>
        <textarea ref={data} style={{border:"1px solid red" ,width:"50vw",height:"3vw", marginLeft:"10%", padding:"1%",  display:"block" }} placeholder="Password" readOnly value={pass}></textarea>
        <button style={{display:"block", margin:"2% 0% 2% 10%"}} onClick={()=>{
              if(pass){
               data.current.select();
               document.execCommand("copy");
               alert("copy")
              }
         
      }}>Copy</button>
       
        <input type="number" placeholder='Set Limit' onChange={(e)=>{
          setlength(e.target.value)
         
        }} style={{margin:" 2% 0% 2% 10%"}}></input>
     
      <div style={{marginLeft:"10%"}} >
     {/* Include UpperCase */}
       <input
        type="checkbox" 
        checked={upper} 
        onChange={()=>{setupper(!upper)
       }} >

       </input>

       <label for="upper">UpparCase</label><br></br>
        {/* Include LowerCae*/}
       <input type="checkbox" name="Lower" checked={Lower} onChange={()=>{setlower(!Lower)}}></input>
       <label for="Lower">LowerCase</label><br></br>
        {/* Include NumberCase */}
       <input type="checkbox" name="Number" checked={Number} onChange={()=>{setnumber(!Number)}}></input>
       <label for="Number">Number</label><br></br>
        {/* Include SpecialCase */}
       <input type="checkbox" name="emoji" checked={Charcter} onChange={()=>{setcharacter(!Charcter)}}></input>
       <label for="emoji">charceter</label><br></br>
    
       </div>
      <button onClick={genrate} style={{margin:"2% 0% 2% 10%"}}>Genrate password</button>

    </div>
  )
}

export default Body