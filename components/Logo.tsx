import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <div className="logo">
        <Link className="text-xl" href="/">
            <strong className='text-teal-500'>Luiz Felipe</strong> Pereira
        </Link>
    </div>
  )
}
