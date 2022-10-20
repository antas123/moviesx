import React from "react";
// import "./LanguageFilter.css";

const Rating =(props)=>{

   const dropdownChangeHandler=(event)=>{
      props.onUpdateRating(event.target.value);
   }

return(<div className='container fil'>
<div className='expenses-filter__control'>
  <label className="lbl" ><b>Choose Rating</b></label>
<select  onChange={dropdownChangeHandler} className="btn btn-dark btn-outline-peace">
  <option className="dropdown-item" value=''>All</option>
  <option className="dropdown-item" value='2'>below 2</option>
  <option className="dropdown-item" value='4'>2.1-4</option>
    <option className="dropdown-item" value='6'>4.1-6</option>
    <option className="dropdown-item" value='8'>6.1-8</option>
    <option className="dropdown-item" value='10'>above 8</option>
  </select>
</div>
</div>

)
}

export default Rating;