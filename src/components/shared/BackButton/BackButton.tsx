import Button from '@/components/ui/Button'
import { useRouter } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import React from 'react'

interface Props {
  className?: string
  clearSearch?: () => void
}

export const BackButton: React.FC<Props> = ({
  className = '',
  clearSearch
}) => {
  const router = useRouter()

  const handleClick = () => {
    if (clearSearch) {
      clearSearch()
    }
    router.history.back()
  }

  return (
    <Button
      onClick={handleClick}
      variant='secondary'
      className={`flex items-center px-2 py-2 ${className}`}
    >
      <ArrowLeft />
    </Button>
  )
}
