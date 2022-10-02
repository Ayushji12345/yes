import React,{useState} from 'react'

const TextArea = () => {

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

    <input type="number"  placeholder='row'  className='c1' name='row'/>
    <input type="text"  placeholder='row' className='c2' name='row2' /><button onClick={()=>handleRemove(index)}>-</button>
    
  </div>
))}
   
  </div><br/>
  <button onClick={()=>handleField()}>+</button>
    </>
  )
}

export default TextArea
