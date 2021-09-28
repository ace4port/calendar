import React from 'react'
import EditIcon from '../icons/Edit'
import CloseIcon from '../icons/Close'

import ViewModal from './ViewModal'

import './styles.scss'
import FormModal from './FormModal'

// View modal, Create/Edit modal
const EventModal = ({ event }) => {
  const handleClose = () => {
    console.log('Handle close/edit')
  }
  const handleEdit = () => {
    console.log('Handle close/edit')
  }

  return (
    <div className="modal">
      <div className="modal__iconsContainer">
        {/* <div className="icon">
          <EditIcon onClick={handleEdit} />
        </div> */}
        <div className="icon">
          <CloseIcon onClick={handleClose} />
        </div>
      </div>

      <FormModal event={event} />
      {/* <ViewModal event={event} /> */}
    </div>
  )
}

export default EventModal
