import React from "react";
import "./LanguageFilter.css";

const LanguageFilter =(props)=>{

    const dropdownChangeHandler = (event) => {
        props.onUpdateLanguage(event.target.value);
    }

return(<div className='container fil'>
<div className='expenses-filter__control'>
  <label className="lbl" ><b>Choose Language</b></label>
<select  onChange={dropdownChangeHandler} className="btn btn-dark btn-outline-peace">
  <option className="dropdown-item" value=''>All</option>
    <option className="dropdown-item" value='English'>English</option>
    <option className="dropdown-item" value='Hindi'>Hindi</option>
    <option className="dropdown-item" value='Tamil'>Tamil</option>
  </select>
</div>
</div>

)
}

export default LanguageFilter;