import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0) ;
  const {name, job, image, text} = people[index] ;

   const checKIndex =  (ind) => {
     if(ind > people.length - 1){
       return 0 ;
     }
     if(ind < 0 ){
       return people.length-1 ;
     }
     return ind ;
   } ;
  const prevFunc = () => {
    setIndex( (index) => {
      let newIndex = index - 1 ;
      return checKIndex(newIndex) ;
    })
  } ;
  const nextFunc = () => {
    setIndex( (index) => {
      let newIndex = index + 1 ;
      return checKIndex(newIndex) ;
    })
  } ;
  
  return (
    <section className = "review">
      <div className = "img-container">
        <img className='person-img' src = {image} alt ={name}/>
        <span className = 'quote-icon'>
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className = "author">{name}</h4>
       <p className = "job" >{job}</p>
       <p className = "info">{text}</p>
        
       <div className = "button-container">
        <button className = "prev-btn" onClick={prevFunc}>
          <FaChevronLeft/>
        </button>
        <button className='next-btn' onClick={nextFunc}>
          <FaChevronRight />
        </button>
        
       </div>
      
    </section>
  );
};

export default Review;
