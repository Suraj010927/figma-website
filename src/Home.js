import React from "react";
import "./App.css";
import rocket from "./rocket.svg";
import bg from "./bg.svg";
import Mid from './home/Mide'
import { svgImages } from './mid-one-images';
import { psvgImages } from './last-one-images';
import Client from './home/Client'
import Acord from './home/Accordian'

function Home() {
  const imageArray = [svgImages.image1, svgImages.image2, svgImages.image3, svgImages.image4, svgImages.image5];
  const imageArray2 = [psvgImages.image1, psvgImages.image2, psvgImages.image3, psvgImages.image4, psvgImages.image5, psvgImages.image6, psvgImages.image7];
  const textArray =
   ['UX/UI Design', 'Marketing', 'Product Management',
    'Data Science', 'Teaching','Content writing','Front end'];
  return (
    <>
      <section id="top-part">
        <div className="lin-grad pt-5 pb-5 d-flex flex-column flex-md-row align-items-md-center justify-content-md-center">
          <div className="d-flex align-items-center flex-column ps-5 pe-5">
            <img src={rocket} alt="Rocket" />
            <h1 className="text-center">Grow Faster Together</h1>
            <h2 className="pt-3 text-center">
              Find a mentor or lead the path for someone.
            </h2>
            <div className="d-grid d-md-flex row-6 gap-5 pt-4">
              <button className="home-btn" type="button">
                Find a Mentor
              </button>
              <button className="home-btn" type="button">
                Become a Mentor
              </button>
            </div>
          </div>
          <div className="bg-container">
            <img
              src={bg}
              alt="Girl on psychologist online session"
              className="pimg"
            />
          </div>
        </div>
      </section>
      <section id="middle-part" className="py-5  mid-sec-text">
            <span className="text-center">Find the expertises from </span>
            
            <Mid images={imageArray} />
            <span className="text-center">Make your career growth in </span>
            <Mid images={imageArray2} texts={textArray} />
           
          </section>
      <section id="middle-part" className="client-sec-text">
            <span className="text-center">What our Clients says about us </span>
<Client />
<Acord />
          </section>

          
    </>
  );
}

export default Home;
