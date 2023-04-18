import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({category}) => {
  return (
    <div class=" exercise-card shadow-card flex flex-col rounded-xl  bg-white bg-clip-border">
  <div class="mx-4 -mt-6 translate-y-0">
        <Link to={`/forum/thread/${category._id}`} >
      <img
        class="w-auto rounded-lg shadow-[0px_12px_22px_2px_#3182ce]" 
        src={`https://source.unsplash.com/500x500/?${category.categoryName}`}
        alt="card"
      />
        </Link> 

    
  </div>
  <div class="text-secondary flex-1 p-6">
  <Link to={`/forum/thread/${category._id}`} >
      <h4 class="font-bold text-xl capitalize text-[#2a477f]">{category.categoryName}</h4>
      </Link> 
    <p class="opcacity-60 mb-3 ">
      {category.categoryDesc.slice(0, 110)}...
    </p>
    <Link to={`/forum/thread/${category._id}`} >
    <button
      className="middle none center rounded-lg bg-blue-500 py-3 px-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-light="true"
    >
      View Thread
    </button>
    </Link> 
  </div>
</div>
  )
}

export default CategoryCard
