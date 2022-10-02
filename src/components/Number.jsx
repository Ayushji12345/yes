import React,{useState} from 'react'

const Number = () => {

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

    <input type="number"  placeholder='Placeholder'  className='c1' name='row' />
    <input type="number"  placeholder='Min' className='c2' name='row2'/>
    <input type="number"  placeholder='Max' className='c2' name='row2' />
    <input type="number"  placeholder='Step' className='c2' name='row2' />
    <button onClick={()=>handleRemove(index)} className="btnn">-</button>
    
  </div>
))}
   
  </div><br/>
  <button onClick={()=>handleField()} className='btn1'>+</button>
  </>
  )
}

export default Number
