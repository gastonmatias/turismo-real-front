import {toast} from 'react-toastify';

const alertToast = (type,msg,position,theme) => {
    
    let options = {
        position,
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme
    }

    switch (type) {
        case 'info':
            toast.info(msg,options)
            break;
        
        case 'success':
            toast.success(msg,options)
            break;    

        case 'warning':
            toast.warn(msg,options)
            break;

        case 'error':
            toast.error(msg,options)
            break;   
        
        case 'default':
            toast(msg,options);
            break;                     

        default:
            break;
    }

}

export default alertToast