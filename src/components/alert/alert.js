import Notification from './notification.js';

let messageInstance;

function getMessageInstance(content) {
    messageInstance = messageInstance || Notification.newInstance(content);
    return messageInstance;
}

function notice({duration = 1.5, content = ''}) {

    let instance = getMessageInstance({m: content});

    instance.add({
        content: content,
        duration: duration
    });
}

export default {
    info(options) {
        return notice(options);
    }
}