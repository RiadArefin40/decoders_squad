import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div class="lg:mx-40 sm:mx-10 my-20 bg-base-100">
  <div class="hero-content flex justify-around mt-20 ">
   
    <div class="card w-full   shadow-2xl bg-base-100">
      <div class="card-body">
      <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Message</span>
          </label>
          <textarea class="textarea textarea-bordered"  rows="6" placeholder="Type Your Message"></textarea>
          <label class="label">
          
          </label>
        </div>
        
          <button class="btn btn-accent w-1/2 mx-auto">Send</button>
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ContactUs;