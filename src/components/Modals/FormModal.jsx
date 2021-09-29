import React, { useState } from 'react'
import Button from '../Button/Button'

import DatePicker from '../Datepicker'

const FormModal = ({ event, addEvent }) => {
  const [formdata, setFormdata] = useState({
    title: '',
    calendar: '',
    color: '',
    start: event.start,
    end: event.end,
    participants: '',
    description: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormdata({ ...formdata, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted with data', JSON.stringify(formdata))
    addEvent(formdata)
  }

  return (
    <form className="modal__form" onSubmit={handleSubmit}>
      <div className="modal__head">
        <h2>Create new event</h2>
        <ColorPicker />
        {/* <h3>{event.calendar.name}</h3> */}
      </div>

      <div className="modal__body">
        <input
          type="text"
          name="title"
          placeholder="Event title"
          value={formdata.title}
          onChange={handleChange}
          required
        />


        <div className="events__dates">
        {/* <DatePicker /> */}
        <DatePicker 
            // type="datetime-local"
            name="start"
            placeholder="Event Start"
            value={formdata.end}
            onChange={handleChange}
            required
        />
        <DatePicker />
        
          {/* <input
            type="datetime-local"
            name="end"
            placeholder="Event End"
            value={formdata.end}
            onChange={handleChange}
            required
          />
        */}
        </div> 

        <input
          type="text"
          name="participants"
          placeholder="Event participants"
          value={formdata.participants}
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Event description"
          value={formdata.description}
          onChange={handleChange}
          required
        />

        <Button type="button" size="default" variant="outlined">
          Cancel
        </Button>
        <Button type="submit" size="medium" variant="primary">
          Create Event
        </Button>
      </div>
    </form>
  )
}

export default FormModal

const ColorPicker = () => {
  return (
    <div className="colorbox">
      <input type="radio" name="color" id="green" />
      <label htmlFor="green">
        <span class="green"></span>
      </label>

      <input type="radio" name="color" id="red" value="red" />
      <label htmlFor="red">
        <span class="red"></span>
      </label>

      <input type="radio" name="color" id="teal" />
      <label htmlFor="teal">
        <span class="teal"></span>
      </label>

      <input type="radio" name="color" id="blue" />
      <label htmlFor="blue">
        <span class="blue"></span>
      </label>

      <input type="radio" name="color" id="orange" />
      <label htmlFor="orange">
        <span class="orange"></span>
      </label>
    </div>
  )
}
