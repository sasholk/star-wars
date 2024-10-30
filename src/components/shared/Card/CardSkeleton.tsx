import React from 'react'

export const CardSkeleton: React.FC = () => {
  return (
    <article className='flex animate-pulse flex-col justify-between gap-4 rounded-2xl border border-slate-700 bg-slate-800 p-4 md:p-8'>
      <header>
        <div className='h-6 w-3/4 rounded-md bg-slate-600'></div>
      </header>

      <main>
        <ul className='flex flex-col gap-4'>
          {[...Array(4)].map((_, index) => (
            <li
              key={index}
              className='h-5 w-full rounded-md bg-slate-600'
            ></li>
          ))}
        </ul>
      </main>

      <footer className='flex justify-center'>
        <div className='h-8 w-full rounded-md bg-slate-600'></div>
      </footer>
    </article>
  )
}
