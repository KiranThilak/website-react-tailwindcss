import React from 'react'

const Main = () => {
  return (
    <main className='max-w-4xl mx-auto'>
        <section id='hero' className='flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12'>

            <article className='sm:w-1/2'>
                <h2 className='max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-blue'>
                    We Boldly Go <span className='text-indigo-700 dark:text-indigo-300'> Where No Rocket</span> Has Gone Before...
                </h2>
                


            </article>
        </section>

    </main>
  )
}

export default Main