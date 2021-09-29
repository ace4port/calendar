import React from 'react'

const ViewModal = ({event}) => {
    return (
        <div className="modal__body">
        <div className="modal__head">
          <h2>{event.title}</h2>
          <h3>{event.calendar?.name}</h3>
        </div>

        <hr className="divider" />

        <div className="modal__body">
          <div className="events__dates">
            <p>
              <strong>From: </strong>
              {event.start.toDateString()}
            </p>
            <p>
              <strong>To: </strong>
              {event.end.toDateString()}
            </p>
          </div>

          {event.participants && (
            <div className="events__participants">
              <h4 className="text text__primary">Participants</h4>
              <div style={{ display: 'flex' }}>
                {event.participants.map((p, i) => (
                  <p className="text text__list" key={i}>{p}</p>
                ))}
              </div>
            </div>
          )}

          <div className="events__description">
            <h4 className="text text__primary">Description:</h4>
            <p className="text text__secondary">{event.description}</p>
          </div>
        </div>
      </div>
    )
}

export default ViewModal
