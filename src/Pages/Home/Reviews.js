import React from "react";

const Reviews = () => {
  return (
    <div className="grid lg:grid-cols-3 lg:mx-20 mx-8 my-20 gap-3">
      <div class="card  bg-base-100 shadow-xl">
        <div class="flex justify-center items-center">
          <div class="avatar online">
            <div class="w-24 rounded-full">
              <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/273532394_4794865383926229_5910255477907281623_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c9JuBLg69IYAX9eLxfF&_nc_ht=scontent.fdac138-1.fna&oh=00_AT-HBonfd6149vIuhrusPJTDzeZTCBSmkdTISRNEV_gvxQ&oe=6338B72C" />
            </div>
          </div>
          <h1 className="text-xl ml-5"> Mostofa Riad</h1>
        </div>
        <div>
          <p className="p-2">
          Decoders Squad” wins Basis National ICT Awards 2020 We are proudly announcing that the Team of “Decoders squad” has been awarded as the Champion in the prestigious BASIS National ICT  award.
          </p>
          <div></div>
          <div class="rating rating-md p-5">
            <p className="px-3">Rating:</p>
            <input
              type="radio"
              name="rating-7"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-7"
              class="mask mask-star-2 bg-orange-400"
             
            />
            <input
              type="radio"
              name="rating-7"
              class="mask mask-star-2 bg-orange-400"
             
            />
            <input
              type="radio"
              name="rating-7"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl">
        <div class="flex justify-center items-center">
          <div class="avatar online">
            <div class="w-24 rounded-full">
              <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/278386371_3279202092348776_4459381580689028128_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NjmNkO-249cAX9GhEd8&tn=buMEXxSR3bfCjH2q&_nc_ht=scontent.fdac138-1.fna&oh=00_AT9VFN69qbScgPgFa9XpGVdMGe3g9Xj3C-EpNsHxHDSYwg&oe=6339793E" />
            </div>
          </div>
          <h1 className="text-xl ml-5"> Foysal Ahmed</h1>
        </div>
        <div>
          <p className="p-2">
           I would like to thanks decoders squad team for their Manage software. It reduces our costs and give me more flexibility to manage my restourant.
          </p>
          <div></div>
          <div class="rating rating-md p-5">
            <p className="px-3">Rating:</p>
            <input
              type="radio"
              name="rating-7"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              class="mask mask-star-2 bg-orange-400"
              
            />
            <input
              type="radio"
              name="rating-7"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-7"
              class="mask mask-star-2 bg-orange-400"
             
            />
            <input
              type="radio"
              name="rating-7"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
      <div class="card  bg-base-100 shadow-xl">
        <div class="flex justify-center items-center">
          <div class="avatar online">
            <div class="w-24 rounded-full">
              <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/275728560_2927001014267129_6120624909408978306_n.jpg?stp=c0.90.160.160a_dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=mifNHk43fbkAX8OxlZf&_nc_ht=scontent.fdac138-1.fna&oh=00_AT-3XHOXLIV8kV6hxhvUuSBciKgoPGMWTvQRWN9ptErrlw&oe=63386560" />
            </div>
          </div>
          <h1 className="text-xl ml-5"> Rahul Reza</h1>
        </div>
        <div>
          <p className="p-2">
            Decoders squad is a great team with innovative ideas.They participate and wins many national and international awards. They developed industry leading software.
          </p>
          <div></div>
          <div class="rating rating-md p-5">
            <p className="px-3">Rating:</p>
            <input
              type="radio"
              name="rating-7"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              class="mask mask-star-2 bg-orange-400"
              
            />
            <input
              type="radio"
              name="rating-7"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-7"
              class="mask mask-star-2 bg-orange-400"
             
            />
            <input
              type="radio"
              name="rating-7"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
      
   
    </div>
  );
};

export default Reviews;
