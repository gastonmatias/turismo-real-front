import {toast} from 'react-toastify';

const alertToast = (type,msg,position,theme) => {
    
    switch (type) {
        case 'info':
            toast.info(msg, {
                position,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme
            });
            break;
        
        case 'success':
            toast.success(msg, {
                position,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme
            });
            break;    

        case 'warning':
            toast.warn(msg, {
                position,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme
            });
            break;

        case 'error':
            toast.error(msg, {
                position,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme
            });
            break;      

        default:
            break;
    }

}

export default alertToast