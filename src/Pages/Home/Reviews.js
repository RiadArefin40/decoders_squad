import React from "react";

const Reviews = () => {
  return (
    <div className="grid lg:grid-cols-3 lg:mx-20 mx-8 my-20 gap-3">
      <div class="card  bg-base-100 shadow-xl">
        <div class="flex justify-center items-center">
          <div class="avatar online">
            <div class="w-24 rounded-full">
              <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/273532394_4794865383926229_5910255477907281623_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=If1jgFMQ_ucAX_j6A1r&_nc_ht=scontent.fdac138-1.fna&oh=00_AT_CiCorak1Di-ioaAP6FTOrzfV-QnOlq3U1LDvmwhEW1w&oe=63054CAC" />
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
              <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/300340069_3266723523645745_7248368037520724702_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JbhCU-9NuokAX_YXwoF&_nc_ht=scontent.fdac138-1.fna&oh=00_AT_tC717LcV7ctTm6UbUyrFTS0EvvTnXdhoMwOdL3eiD2A&oe=63049F5C" />
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
              <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/275728560_2927001014267129_6120624909408978306_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yAYZaaUAfOMAX-nYNwY&_nc_ht=scontent.fdac138-1.fna&oh=00_AT-cbzkG_x_mCdAbnwN52mgkgfMZkJbqPctmmvaMpmw0Hw&oe=63038B1E" />
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
