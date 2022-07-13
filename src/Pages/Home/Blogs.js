import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
  const [blogs,setBlogs]=useState([]);
  useEffect( ()=>{
    fetch("blog.json")
    .then(res=>res.json())
    .then(data=>{
      setBlogs(data);
      console.log(blogs)
    })
  },[blogs.length])
    return (
        <div className='grid lg:grid-cols-3 gap-2 mx-20 my-20'>
        
            {
              blogs.map(blog=> <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;