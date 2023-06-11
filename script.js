
const names = ['Mani Ram', 'Binledan', 'Tom']

function getThingOne (callback1, callback2) {
    //call getThingTwo and pass a name and callback (getThingThree)
   return callback1([names[0]], callback2)
}

function getThingTwo (list, callback) {
  //call getThingThree, and concat the list with the newest name
  return callback([...list, names[1]])
}

function getThingThree (list) {
  //return all the names
  return `${list},${names[2]}`;
}

let result = document.getElementById('result');
result.innerText = getThingOne(getThingTwo, getThingThree);

