import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Todo from "./components/Todo";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import axios from 'axios';

// function App() {
//   const [todo, setTodo] = useState([]);
//   const [text, setText] = useState("");
//   console.log(todo);
// }

function App(){
  const[data, setData]= useState([]);
  // useEffect(() => 
  // // {
  // //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  // //     .then(response => response.json())
  // //     .then(json => console.log(json))
  // // },[data]
  
  

  // )

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) =>
    {
      let data = response.data;
      console.log(data)
      setData(data);
    }
    )
    .catch()
    
  }, [])
  

return (
  // <div className="App">
  //   {/* <button onClick={()=>{
  //     setfirst(5);
  //   }}>5</button>

  //   <button onClick={()=>{
  //     setfirst(first+"2");
  //   }}>2</button>

  //   <p>First number: {first}</p>  */}
  //   <h2>TO DO APPLICATIION</h2>
  //   <input type="text" onChange = {(event)=>{setText(event.target.value)}}/>
  //   <button>Add to List</button>
  //   <div>
  //     (
  //       todo.map{(item) => {
  //         <li>
  //           (item)
  //         </li>
  //       }}
  //     )
  //   </div>
  // </div>
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/todo"> Todo </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>

    <button onClick={() => {
      setData(data+1)
    }}>Add List</button>
  </Router>
);
}
export default App;

//This is testing line