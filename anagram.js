const emp = 'help\nelph'
const words = emp.split('\n');
let sortA = words[1].split('').sort().join('')
let sortW = words[0].split('').sort().join('')
alert(+(sortA === sortW))
