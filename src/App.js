import React , {useState} from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Caraousel from "./Components/Caraousel";
import Cards from "./Components/Card"
import movies from "./Components/Movies-array";
import GenreFilter from "./Components/Filter/GenreFilter";
import LanguageFilter from "./Components/Filter/LanguageFilter";
import Rating from "./Components/Filter/Rating";


const rendermovies=(x)=>{

  return <Cards
     imgurl={x.imgURL}
     key={x.key}
     trail={x.trailer}
     year={x.year}
     name={x.Name}
     genre={x.genre}
     lang={x. Language}
     rating={x.rating}
     />
}

function App() {

  // GENRE FILTER-----------------------------------------------------------------------------------
  const [genre, setgenre] = useState("");
  const genreUpdateHandler = (genreUpdated) => {
    setgenre(genreUpdated);
  }
  const genreFilteredArray = movies.filter((movie) => {
    return movie.genre.toLowerCase().includes(genre.toLowerCase());
  })

  // LANGUAGE FILTER---------------------------------------------------------------------------------
  const [language, setlanguage] = useState("");
  const langUpdate =(langUpdated)=>{
    setlanguage(langUpdated)
  }
  const LanguageFilteredArray = genreFilteredArray.filter((movie) => {
    return movie.Language.toLowerCase().includes(language.toLowerCase());
  })

  //IMDB filter----------------------------------------------------------------------------------------
   const [rating, setRating] = useState("");
   const ratingUpdate=(ratingUpdated)=>{
     setRating(ratingUpdated);
   }
   const RatingUpdateArray = LanguageFilteredArray.filter((movie)=>{
    return (rating==='' || (parseFloat(movie.rating)<=parseFloat(rating) && parseFloat(movie.rating)>parseFloat(rating)-2));
   })

  return (
   <>
     <Navbar />
     <Caraousel />

    <div className=" container-fluid filter-box">
    <GenreFilter displayGenre={genre} onUpdateGenre={genreUpdateHandler}/>
    <LanguageFilter onUpdateLanguage={langUpdate} />
    <Rating  onUpdateRating={ratingUpdate}/>
    </div>

   <div className="mov">
    {RatingUpdateArray.map(rendermovies)}
   </div>
   </>
  );
}

export default App;
