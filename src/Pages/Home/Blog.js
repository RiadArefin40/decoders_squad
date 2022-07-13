import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = ({blog}) => {
    const {id,headline,cat,des,img} = blog;
    const navigate = useNavigate();
    const navigateToBlog=id=>{
        navigate(`/blog/${id}`)
    }
    return (
        <div class="card card-compact bg-base-100 shadow-xl">
        <figure><img src={img} height="150px" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">{headline}
          <div class="badge badge-secondary">{cat}</div>
          </h2>
          <p>{des.slice(0,120).concat("................")}</p>
          <div class="card-actions ">
            <button onClick={()=>navigateToBlog(id)} class="btn btn-accent">View Details</button>
          </div>
        </div>
      </div>
      
    );
};

export default Blog;