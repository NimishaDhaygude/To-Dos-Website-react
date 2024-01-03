
import './App.css';
import Header from './mycomponents/Header';
import About from './mycomponents/About';
import Help from './mycomponents/Help';
import Todos from './mycomponents/Todos';
import Footer from './mycomponents/Footer';
import AddTodo from './mycomponents/AddTodo';
import React, { useState, useEffect } from 'react'; //importing usestate hook
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todoToDelete) => {
    console.log('Todo deleted:', todoToDelete);

    // Use setTodos with a functional update to avoid issues with the same variable name
    setTodos((prevTodos) => prevTodos.filter((e) => e !== todoToDelete));
  };

  useEffect(() => {
    // This useEffect will run whenever todos changes
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); // Make sure to include todos as a dependency

  let addTodo = (title, desc) => {
    console.log("New todo added ", title, desc);
    let sno;

    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    // Use setTodos with a functional update to avoid issues
    setTodos((prevTodos) => [...prevTodos, myTodo]);
    console.log(myTodo);

  };



  /*  return (
      <>
        <Header title="My Todos" searchbar={false} />
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
        <Footer />
      </>
    );*/
  /* return (
     <>
       <Router>
         <Header title="My Todos" searchbar={false} />
         <Routes>
           <Route exact path="/" render={() => {
             return (
               <>
                 <AddTodo addTodo={addTodo} />
                 <Todos todos={todos} onDelete={onDelete} />
               </>
             )
           }} />
           <Route exact path="/about">
             <About />
           </Route>
         </Routes>
         <Footer />
       </Router >
     </>
   );*/
  return (
    <>
      <Router>
        <Header title="My Todos" searchbar={false} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />

          <Route path="/about" element={<About  />} />
          <Route path="/help" element={<Help  />} />
        </Routes>
        <Footer />
      </Router >
    </>
  );
}

export default App;
