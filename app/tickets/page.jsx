import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'

export default function tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>
            Tickets
          </h2>
          <p><small>
          Currently opend Tickets
          </small></p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
      <TicketList />
      </Suspense>
      </main>
      
    
  )
}
