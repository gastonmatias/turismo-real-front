import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const confirmAction = (title,message,actionYes) => {
    
  confirmAlert({
      title,
      message,
      buttons: [
        {
          label: 'Si',
          onClick: () => actionYes()
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    })
}

export default confirmAction