import React from 'react';

const List = ({peopleProp}) => {
  return (
    <>
      {peopleProp.map( (bPerson) => {
        const {id,name,age,image} = bPerson ;

         return (
              <article className = 'person' key = {id} >
                <img src = {image} alt = "ii" />
                <div>
                <h4>{name}</h4>
                <p>{age} years</p>
                </div>
              </article>
         ) ;
      })}
    </>
  );
};

export default List;
