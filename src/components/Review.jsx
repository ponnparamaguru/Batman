import React from 'react'
import r1 from '../asserts/r1.jpg'
import r2 from '../asserts/r2.jpg'
import r3 from '../asserts/r3.jpg'

function Review() {
  return (
    <div className='bg-black h-full w-full'>
    <section class=" text-white font-body">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block " src={r1}/>
          <p class="leading-relaxed">I've seen <span className='text-red-500'>#TheBatman</span> and it is a ferocious detective drama punctuated by moments of incredibly visceral action. Matt Reeves' direction is dark, deep, intense & flooded w/ instantly iconic imagery. A live-action BATMAN movie unlike any we've seen. Brilliant & badass. BIG recommend</p>
          <span class="inline-block h-1 w-10 rounded bg-red-600 mt-6 mb-4"></span>
          <h2 class="text-red-500 font-medium title-font tracking-wider text-sm">ERIK DAVIS</h2>
          <p class="text-gray-300">Reviewer</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block " src={r2}/>
          <p class="leading-relaxed">The Batman is unlike any other Batman film before it. The plot is grounded in reality, even more so than Nolan’s Dark Knight trilogy. <span className='text-red-500'>#TheBatman</span> is more of a detective story rather than a superhero film. The cast is v. good with Colin Ferrell & Paul Dano being the film’s MVPs.</p>
          <span class="inline-block h-1 w-10 rounded bg-red-600 mt-6 mb-4"></span>
          <h2 class="text-red-500 font-medium title-font tracking-wider text-sm">SCOTT MENZEL</h2>
          <p class="text-gray-300">Writter</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block " src={r3}/>
          <p class="leading-relaxed">Pattinson in <span className='text-red-500'>#TheBatman</span> feels like a man that is being held together by duct tape, pain killers, and madness. Then he puts on the mask and he's like a demon from hell, an alien. The decision to make his footsteps reverberate in the film itself is absolutely genius.</p>
          <span class="inline-block h-1 w-10 rounded bg-red-600 mt-6 mb-4"></span>
          <h2 class="text-red-500 font-medium title-font tracking-wider text-sm">EVAN</h2>
          <p class="text-gray-300">Writter</p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default Review