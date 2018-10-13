import uuidv4 from 'uuid/v4';

function * uniqueKey() {
    while(true) {
        yield uuidv4();
    }
}

export default uniqueKey;