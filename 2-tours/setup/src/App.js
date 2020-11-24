import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
const [loading,setLoad] = useState(true) ;
const [tours,setTour] = useState([]) ;

const removeTour = (id) => {
  const newTour = tours.filter((tour) => tour.id !== id)
  setTour(newTour) ;
}

const fetchTours = async () => {
  setLoad(true) ;

   try{
    
     const response = await fetch(url); 
     const tours = await response.json() ;
     setLoad(false) ;
     setTour(tours) ;
   }
   catch(error) {
    setLoad(false) ;
    console.log(error)
   }
}

useEffect( ()=> {
  fetchTours()                    //Mounting Phase
},[]) ;
 
  if(loading == true) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if(tours.length == 0) {
    return (
      <main>
        <div className = "title">
          <h2>No More Tours For U</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour = {removeTour}/>
    </main>
  )
}

export default App
