require('console-error');
require('console-warn');

const assignId = (annList, startNumber = 15737110) => {
    annList.forEach(obj => obj['postNumber'] = startNumber++);
};
// generator is a better solution (for the future (on creating an announcement))
// function* idMaker() {
//     var index = 0;
//     while (true)
//       yield index++;
//   }
  
//   var gen = idMaker();

const output = (error) => {
    console.error(`There is a ${error.name}\n${error.message}`);
};

module.exports = {
    output,
    assignId,
}
