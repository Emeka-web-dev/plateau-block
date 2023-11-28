import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <article>
        <div className='py-12 bg-[#dae5e6] dark:bg-[#323536] border-y-black dark:border-y-white border-y'>
            <h3 className='text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl pb-4 md:pb-6 font-bold capitalize'>about think plateau</h3>
            <p className='max-w-2xl mx-auto text-center px-5'>I am the three-time #1 New York Times bestselling author of The Subtle Art of Not Giving a F*ck, as well as other titles. My books have sold over 20 million copies, been translated into more than 65 languages, and reached number one in more than a dozen countries. In 2023, a feature film about my life and ideas was released worldwide by Universal Pictures.</p>
        </div>
        <section></section>
    </article>
  )
}

export default page