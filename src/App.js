import React from 'react'
import Calender from './components/Calender'
import EventModal from './components/Modals/Event'
import Nav from './components/Nav'

const date = new Date()
const event = {
  title: '2 Days event',
  start: date.toDateString(),
  end: date.toDateString(),
  participants: ['ascasc@ascasc.co', 'cascascc@cascic.co'],
  calendar: {
    name: 'MyCalender',
  },
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit assumenda perferendis sunt sit molestiae iure atque, iste quibusdam voluptate minus.',
}

function App() {
  return (
    <>
      <Nav>
        <Calender />
        <div style={{ display: 'flex' }}>
          <EventModal event={event} type="Create" />
          <EventModal event={event} type="Edit" />
          <EventModal event={event} type="View" />
        </div>
      </Nav>
    </>
  )
}

export default App
