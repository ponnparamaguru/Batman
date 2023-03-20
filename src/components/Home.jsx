import React from 'react'
import batman from '../asserts/batman2.png'

function Home() {
  return (

    

    <div className='bg-black w-full h-full'>
        <section class="text-white font-body">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
      <img class="object-cover object-center" alt="hero" src={batman}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class=" sm:text-8xl text-4xl mb-4 font-bold font-comp text-white ">THE <span class="sm:text-8xl text-4xl font-bold mb-4 text-red-600">BATMAN</span>
      </h1>
      <p class="mb-4 sm:text-xl text-lg leading-relaxed">
      Batman was originally introduced as a ruthless vigilante who frequently killed or maimed criminals, but evolved into a character with a stringent moral code and strong sense of justice. Unlike most superheroes, Batman does not possess any superpowers, instead relying on his intellect, fighting skills, and wealth.
        </p>
      <div class="flex justify-center sm:pt-2 pt-0 ">
        <button class="inline-flex text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 
        rounded text-lg font-bold">Watch Now</button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Home