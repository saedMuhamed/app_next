import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './gees_logo_Updated.png'

export default function Navbar() {
  return (
      <nav>
          <Image
              src={Logo}
              alt='Logo '
              width={150}
              quality={100}
              Image='blur'
          />
          <h1> Ticket Center</h1>
          <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href='/tickets/createForms' > Add a ticket</Link>
        </nav>
        
  )
}
