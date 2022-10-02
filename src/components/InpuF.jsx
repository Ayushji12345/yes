import React,{useState,useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


import CheckBox from "./CheckBox";
import None from "./None";
import Number from "./Number"
import Radio from "./Radio"
import Select from "./Select"
import TextArea from "./TextArea"


const InpuF = () => {
  const[select,setSelects]=useState()

  const [none,setNone]=useState(false)
  const [number,setNumber]=useState(false)
  const [radio,setRadio]=useState(false)
  const [selects,setSelect]=useState(false)
  const [textarea,setTextArea]=useState(false)
  const [checkbox,setCheckbox]=useState(false)


  useEffect(()=>{
    select === "none1"
    ? setNone(true)
    :setNone(false)
    select === "number2" ? setNumber(true):setNumber(false)
    select === "Radio3" ? setRadio(true) : setRadio(false)
    select === "select4" ? setSelect(true) : setSelect(false)
    select === "textarea5" ? setTextArea(true) : setTextArea(false)
    select === "checkbox" ? setCheckbox(true) : setCheckbox(false)
  })

  const handleChange=(e)=>{
    setSelects(e.target.value)
  }
  const handleClick=()=>{
    toast("Add Successfuly!");
   
  }
 
  return (
    <div>
   
      <div className="form">
        <div class="mb-3 row">
          <label for="inputField" class="col-sm-4 col-form-label">
            Title
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              placeholder="Servey Title"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-8 col-form-label">
           Question Description
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              placeholder="Question Description"
            />
          </div>
        </div>
       
       Answer Type: <select value={select} onChange={handleChange} >
        <option></option>
    <option value="none1" >None</option>
    <option value="number2">Number</option>
    <option value="Radio3">Radio</option>
    <option value="select4">Select</option>
    <option value="textarea5">TextArea</option>
    <option value="checkbox">Checkbox</option>
  </select>
        <div>
          {none && <None/>}
          {number && <Number/>}
          {radio && <Radio/> }
          {selects && <Select/>}
          {textarea && <TextArea/>}
          {checkbox && <CheckBox/>}
        </div>
        <br></br>
        <button type="button" class="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default InpuF;
