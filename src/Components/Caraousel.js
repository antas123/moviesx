import React from "react";
import "./Caraousel.css";

const Caraousel=()=>{

    return <div id="carouselExampleCaptions" className="carousel slide maincar" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">

        <img  src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Shamshera_Launch/524fe23c-55b8-46b9-a764-67a1d6fc5fc2._UR3000,600_SX3000_FMwebp_.jpeg" className="d-block w-100 car-img" alt="..."/>

        <div className="carousel-caption d-none d-md-block">
          {/* <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p> */}
        </div>
      </div>
      <div className="carousel-item">
        <img  src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_JurassicWolrdDominion_LaunchJupiter/1dfe48d8-f84a-4ecb-84fd-1ca5333998d5._UR3000,600_SX3000_FMwebp_.jpeg" className="d-block w-100 car-img" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          {/* <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p> */}
        </div>
      </div>
      <div className="carousel-item">
        <img  src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_MoonFall_LP/95c92bb2-611c-463b-87b6-9787891bdc94._UR3000,600_SX3000_FMwebp_.jpeg" className="d-block w-100 car-img" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          {/* <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p> */}
        </div>
      </div>
      <div className="carousel-item">
        <img  src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_AmmuTelugu_Launchjupiter/c93d1482-16bb-4e3a-9c3e-d968027eeec5._UR3000,600_SX3000_FMwebp_.jpeg" className="d-block w-100 car-img" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          {/* <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p> */}
        </div>
      </div>
      <div className="carousel-item">
        <img  src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_LOTRTROPFinale108_AllEpisodesAvailable/875b91ac-063a-4b03-adef-1cfca084181e._UR3000,600_SX3000_FMwebp_.jpeg" className="d-block w-100 car-img" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          {/* <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p> */}
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>


}

export default Caraousel;