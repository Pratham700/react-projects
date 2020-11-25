import React from 'react';

const Categories = ({categories,filtered}) => {
  return (
    <div className="btn-container">
      {categories.map( (category,index) => {
        return (
          <button className ="filter-btn" type = "button" key = {index} onClick={() => filtered(category)}>
            {category}
          </button>
        )
      })}
    </div>
  );
};

export default Categories;
