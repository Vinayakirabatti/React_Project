import "./App.css";
import Home from "./components/Home";
import { Nav, Navbar, Container } from 'react-bootstrap';


import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ListCustomer from "./components/ListCustomer";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar bg="dark" data-bs-theme="dark">
            <Navbar.Brand href="#home">Sql Injection</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/Home" to="">Home</Nav.Link> 
              <Nav.Link href="/Login" to="">Login</Nav.Link>
              <Nav.Link href="/ListCustomer" to="">ListCustomer</Nav.Link>  
            </Nav>
          </Navbar>
          <Routes>
            <Route element={<Home />} path="/" exact></Route>
            <Route element={<Home />} path="/Home"></Route>
            <Route element={<ListCustomer />} path="/ListCustomer"></Route>
            <Route element={<Login />} path="/Login"></Route>
            
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
