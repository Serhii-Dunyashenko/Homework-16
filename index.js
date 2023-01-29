// 1. isEmpty check
const objectEmpty = {
    fristNames: 'Michael'
}
const objectFull = {
    firstNames: 'Bruce',
    lastNames: 'Willis',
};
function isEmpty (obj) {
    let keysCount = Object.keys(obj).length;
    if (keysCount > 1) {
        console.log(`This pbject is full of properties`)
    } else {
        console.log(`This pbject is empty`)
    }
};
isEmpty(objectFull);
isEmpty(objectEmpty);
