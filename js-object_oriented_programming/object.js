let memberArray = ['egoing', 'graphittie', 'leezhce']

console.log(memberArray[2]);

let memberObject = {
  manager: 'egoing',
  developer: 'graphittie',
  designer: 'leezhce'
};

memberObject.designer = 'leezche';

console.log(memberObject.designer);
console.log(memberObject['designer']);

delete memberObject.manager;

console.log(memberObject.manager);