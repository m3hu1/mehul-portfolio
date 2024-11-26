'use client'

import React, {ReactNode} from 'react'
import {Button} from './ui/button'
import {MoveLeft} from 'lucide-react'
import {useRouter} from 'next/navigation'

const BackButton = ({children}: {children: ReactNode}) => {
  const router = useRouter()
  return (
    <Button
      variant="link"
      className="p-0 flex items-center gap-2 h-full"
      style={{ color: '#3C82F6' }}
      onClick={() => router.push('/blog')}
    >
      <MoveLeft className="size-4" />
      {children}
    </Button>
  )
}

export default BackButton