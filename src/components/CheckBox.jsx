import React,{useState} from 'react'

const CheckBox = () => {


  const[val,setVal]=useState([
    {
     row:"",row2:""
    }
       
     ])
   
     const handleField=()=>{
       setVal([...val,[]])
     }
     const handleRemove=(index)=>{
       const values = [...val]
       values.splice(index,1)
       setVal(values)
     }

  return (
    <>
       <div>
{ val.map((v,index)=>(
  <div key={index}>  

    <input type="number"  placeholder='placeholder'  className='c1' name='row' />
   
    
    <button onClick={()=>handleRemove(index)} className="btnn">-</button>
    
  </div>
))}
   
  </div><br/>
  <button onClick={()=>handleField()} className='btn1'>+</button>
    </>
  )
}

export default CheckBox
