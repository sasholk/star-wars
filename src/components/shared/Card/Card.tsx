import Item from './Item'
import styles from '@/styles/gradient.module.scss'
import { Hero } from '@/types/Hero'
import { Link } from '@tanstack/react-router'
import React from 'react'

interface Props {
  hero: Hero
}

/**
 * A card component that displays detailed information about a hero.
 *
 * @component
 * @param {Props} props - The props for the Card component.
 * @param {Hero} props.hero - The hero data to be displayed.
 *
 * @returns {React.ReactElement} The rendered card component.
 *
 * @example
 * <Card hero={hero} />
 */
export const Card: React.FC<Props> = ({ hero }) => {
  const { name, gender, birth_year, height, homeworld } = hero

  const heroDetails = [
    { label: 'Gender', value: gender },
    { label: 'Birth Year', value: birth_year },
    { label: 'Homeworld', value: homeworld },
    { label: 'Height', value: `${height} cm` }
  ]

  return (
    <article
      className={`${styles.gradient} ${styles.noBlur} flex flex-col justify-between gap-4 rounded-2xl border border-slate-700 bg-slate-800 p-4 md:p-8`}
    >
      <header>
        <h3 className='text-2xl font-bold'>{name}</h3>
      </header>

      <main>
        <ul className='flex flex-col gap-4'>
          {heroDetails.map(({ label, value }) => (
            <Item
              key={label}
              label={label}
              info={value}
            />
          ))}
        </ul>
      </main>

      <footer className='flex justify-center'>
        <Link
          to={`/heroes/${hero.id}`}
          className='btn primary w-full text-nowrap py-1 text-center'
        >
          Check <span className='hidden md:inline'>more</span>
        </Link>
      </footer>
    </article>
  )
}
