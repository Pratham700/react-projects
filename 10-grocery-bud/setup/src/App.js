import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem('list') ;
  if(list) {
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return [] ;
  }
}
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (!name) {
      //Display ALert
      showAlert(true, "danger", "Add Items");
    } else if (name && editMode) {
      //deal with edit
      setList(list.map((item)=>{
        if(item.id === editId) {
          return {...item, title: name}
        }
        return item ;
      })
      )
      setName('') ;
      setEditId(null) ;
      setEditMode(false) ;
      showAlert(true,'success','Updated')
    } else {
      showAlert(true, "success", "Item Added");

      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "Hey!! List Cleared");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "Item Removed");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setEditMode(true);
    setEditId(id);
    setName(specificItem.title);
  };

   useEffect( ()=>{
     localStorage.setItem('list',JSON.stringify(list))
   },[list])

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleClick}>
        {alert.show && <Alert {...alert} list={list} removeAlert={showAlert} />}
        <h3>Grocery Check-List</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g: Kidney-Beans"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {editMode ? "edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            Clear List
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
