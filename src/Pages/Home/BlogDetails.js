import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails =() => {
    const{blogId}= useParams();
   
    const [blogs,setBlogs]=useState([]);
    useEffect( ()=>{
      fetch("/blog.json")
      .then(res=>res.json())
      .then(data=>{
        setBlogs(data);
      })
    },[blogs.length]);
    console.log(typeof(blogId))
    
    
    

    const blog = blogs.find (item =>item.id === blogId );
    console.log(blog?.des)
    return (
      <div class="hero min-h-screen bg-base-200 px-10 ">
      <div class="hero-content flex-col lg:flex-row">
        <img src={blog?.img} class=" rounded-lg shadow-2xl" />
        <div className=' text-center'>
          <h1 class="text-5xl font-bold">{blog?.headline}</h1>
          <p class="py-6">{blog?.des}</p>
         
        </div>
      </div>
    </div>
    );
};

export default BlogDetails;