import { message } from 'antd';


window.appName = 'Greenmind'

window.emailFormate = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

// window.isEmail = email =>  emailFormate.test(email) ;
window.notify = (text, type) => {
    switch (type) {
        case 'success': message.success(text); break;
        case 'error': message.error(text); break;
        case 'info': message.info(text); break;
        case 'dismiss': message.dismiss(text); break;
        default: message.info(text); break
    }

}