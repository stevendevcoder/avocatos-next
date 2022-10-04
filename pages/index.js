import React from 'react'
import Link from 'next/link'

const index = () => {
  return (
    <div>
      <h1>Hola mundo</h1>
      <Link href='/about'>About</Link>
    </div>
  )
}

export default index