import React from 'react';

const Product = ({product}) => {
    const{id,des,img}= product;
    return (
        <div class="card  bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl h-44" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{des}</h2>
         
          <div class="card-actions">
            <button class="btn btn-accent">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default Product;