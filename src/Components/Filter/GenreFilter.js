import React from "react";
import "./Genrefilter.css";

const GenreFilter =(props)=>{

    const dropdownChangeHandler = (event) => {
        props.onUpdateGenre(event.target.value);
    }

return(<div className='container fil'>
<div className='expenses-filter__control'>
  <label className="lbl" ><b>Choose Genre</b></label>
<select value={props.displayGenre} onChange={dropdownChangeHandler} className="btn btn-dark btn-outline-peace">
  <option className="dropdown-item" value=''>All</option>
    <option className="dropdown-item" value='Horror'>Horror</option>
    <option className="dropdown-item" value='Action'>Action</option>
    <option className="dropdown-item" value='Science'>Science</option>
    <option className="dropdown-item" value='Sci-fiction'>Sci-fiction</option>
    <option className="dropdown-item" value='Animated'>Animated</option>
    <option className="dropdown-item" value='Drama'>Drama</option>
    <option className="dropdown-item" value='Mystery'>Mystery</option>
    <option className="dropdown-item" value='History'>History</option>
  </select>
</div>
</div>

)
}

export default GenreFilter;