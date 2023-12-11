import Link from 'next/link'
import React from 'react'

export const Menu = () => {
  return (
    <div>
        <ol className='text-sm'>
            <li>
                <Link href="#/sobre">Sobre</Link>
            </li>
        </ol>
    </div>
  )
}
