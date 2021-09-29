import React, { useState } from 'react'

import { Calendar, Views, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import getDay from 'date-fns/getDay'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'
// import moment from 'moment'
import './styles.scss'
import EventModal from '../Modals/Event'

const DragCalendar = withDragAndDrop(Calendar)

const locales = { 'en/US': require('date-fns/locale/en-US') }
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const eventList = [
  {
    id: 1,
    title: 'B-Day',
    start: new Date(),
    end: new Date(),
    calendar: {
      name: 'myCalender123',
    },
    allDay: false,
  },
  {
    id: 2,
    title: 'Big Meeting',
    allDay: true,
    start: new Date(2021, 10, 0),
    end: new Date(2021, 10, 0),
  },
  {
    id: 3,
    title: 'Vacation',
    start: new Date(2021, 8, 7),
    end: new Date(2021, 8, 10),
  },
  {
    id: 4,
    title: 'Conference',
    start: new Date(2021, 8, 20),
    end: new Date(2021, 8, 23),
  },
]

const Calender = () => {
  const [events, setEvents] = useState(eventList)

  const [modal, setModal] = useState({ type: 'view', show: false, event: eventList[0] })

  const [draggedEvent, setDraggedEvent] = useState()
  const [displayDragItemInCell, setDisplayDragItemInCell] = useState(true)

  const addEvent = ({ title, start, end }) => {
    if (title) {
      setEvents([...events, { title: title, start, end }])
    }
  }

  const moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const newEventsList = events.map((oldEvent) => {
      return oldEvent.id === event.id ? { ...oldEvent, start, end, allDay } : oldEvent
    })
    console.log(`${event.title} was dropped onto ${event.start}`)
    setEvents(newEventsList)
  }

  const resizeEvent = ({ event, start, end }) => {
    const nextEvents = events.map((existingEvent) => {
      return existingEvent.id === event.id ? { ...existingEvent, start, end } : existingEvent
    })

    setEvents(nextEvents)
    console.log(`${event.title} was resized to ${start}-${end}`)
  }

  const handleDragStart = (e) => {
    setDraggedEvent(e)
  }

  const dragFromOutsideItem = () => draggedEvent
  const onDropFromOutside = ({ start, end, allDay }) => {
    const event = {
      id: draggedEvent.id,
      title: draggedEvent.title,
      start,
      end,
      allDay: allDay,
    }
    setDraggedEvent(null)
    moveEvent({ event, start, end })
  }

  return (
    <div className="calender">
      <DragCalendar
        selectable
        localizer={localizer}
        events={events}
        toolbar={true}
        style={{ width: 1180, height: 580 }}
        //learn about them
        startAccessor="start"
        endAccessor="end"
        // Add event, view event
        onSelectSlot={(e) => setModal({ ...modal, type: 'add', show: true, event: e })}
        onSelectEvent={(e) => setModal({ ...modal, type: 'view', show: true, event: e })}
        // costom time stamps
        step={15}
        timeslots={8} // 1-15min --  2- half hour -- 4- 1hr
        // Event resize functions
        resizable
        // Event drag and drop
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        onDragStart={console.log}
        // Default date, view
        // defaultDate = {new Date(2021, 8, 11)}
        defaultView={Views.MONTH}
        // popup to show more events
        popup={true}
        dragFromOutsideItem={displayDragItemInCell ? dragFromOutsideItem : null}
        onDropFromOutside={onDropFromOutside}
        handleDragStart={handleDragStart}
        // titleAccessor={EventModal}
        tooltipAccessor

        // selected={console.log}
        // rtl={true}
        // date={}
      />

      <div className="modal__container" style={{ position: 'absolute' }}>
        {modal.show && (
          <EventModal
            type={modal.type}
            event={modal.event}
            handleClose={() => setModal({ ...modal, show: false })}
            addEvent={addEvent}
          />
        )}
      </div>
    </div>
  )
}

export default Calender
