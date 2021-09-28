import React, { useState } from 'react'

const FormModal = ({ event }) => {
  const [formdata, setFormdata] = useState({
    title: '',
    calendar: '',
    color: '',
    start: '',
    end: '',
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
  }

  return (
    <form className="modal__form" onSubmit={handleSubmit}>
      <div className="modal__head">
        <h2>Create new event</h2>
        <h3>{event.calendar.name}</h3>
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
          <input
            type="datetime-local"
            name="start"
            placeholder="Event Start"
            value={formdata.start}
            onChange={handleChange}
            required
          />
          <input
            type="datetime-local"
            name="end"
            placeholder="Event End"
            value={formdata.end}
            onChange={handleChange}
            required
          />
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

        <button type="button">Cancel</button>
        <button type="submit">Create Event</button>
      </div>
    </form>
  )
}

export default FormModal
