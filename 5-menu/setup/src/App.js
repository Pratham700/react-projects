import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories = ['all',...new Set(items.map((item)=>item.category))]

function App() {
  const[menuItems,setMenu] = useState(items) ;
  const[categories,setCategory] = useState(allCategories) ;

  const filterDisplay = (category)=>{
    if(category ==='all'){
      setMenu(items) ;
      return
    }

   const newItem = items.filter((item)=> item.category === category);
   setMenu(newItem);
  } 

  return (
  <main>
    <section className="menu section">
      <div className="title">
      <h1>Menu</h1>
      <div className = "underline"></div>
      </div>
      <Categories categories={categories} filtered={filterDisplay}/>
      <Menu items = {menuItems}/> 
    </section>
  </main>

  );
}

export default App;
