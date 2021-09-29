import React from 'react'
import EditIcon from '../icons/Edit'
import CloseIcon from '../icons/Close'

import ViewModal from './ViewModal'
import FormModal from './FormModal'
import './styles.scss'
// View modal, Create, Edit modal
const EventModal = ({ event, type, handleClose, addEvent }) => {
  const handleEdit = () => {
    console.log('Handle close/edit')
  }

  return (
    <div className="modal-contain">
      <div className={`modal`}>
        <div className="modal__iconsContainer">
          {type === 'view' && (
            <div className="icon">
              <EditIcon onClick={handleEdit} />
            </div>
          )}
          <div className="icon" onClick={handleClose}>
            <CloseIcon />
          </div>
        </div>

        {type === 'view' ? (
          <ViewModal event={event} />
        ) : type === 'add' ? (
          <FormModal event={event} addEvent={addEvent} handleClose={handleClose} />
        ) : (
          <FormModal event={event} addEvent={addEvent} handleClose={handleClose} />
        )}
      </div>
    </div>
  )
}

export default EventModal

// const Modal = ({childern, props}) => {
//   return (
//      <div className={`modal`}>
//           <div className="modal__iconsContainer">
//             {type === 'view' && (
//               <div className="icon">
//                 <EditIcon onClick={handleEdit} />
//               </div>
//             )}
//             <div className="icon" onClick={handleClose}>
//               <CloseIcon />
//             </div>
//           </div>

//           {type === 'view' ? <ViewModal event={event} /> : <FormModal event={event} addEvent={addEvent} />}
//         </div>
//   )
// }
