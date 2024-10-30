import { BackButton } from '../BackButton'
import React from 'react'

interface Props {
  error: Error
}

const Error: React.FC<Props> = ({ error }) => {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-xl text-red-500'>Error: {error.message}</p>
      <div>
        <span>Go back</span>
        <BackButton />
      </div>
    </div>
  )
}

export default Error
