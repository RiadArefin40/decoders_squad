import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import BlogDetails from './Pages/Home/BlogDetails';
import Blogs from './Pages/Home/Blogs';

function App() {
  return (
    <div className="">
       <Navbar></Navbar>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='home' element={<Home></Home>}></Route>
         <Route path='/blog/:blogId' element={<BlogDetails></BlogDetails>}></Route>
         <Route path='blogs' element={<Blogs></Blogs>}></Route>
       </Routes>
       
       <Footer></Footer>
    </div>
  );
}

export default App;
