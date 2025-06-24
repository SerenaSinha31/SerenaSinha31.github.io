//json //api only way to communicate
const student='{"name":"Amy", "age":21}'
const obj = JSON.parse(student)//convert into object json.parse is used
console.log(obj.name)//object
console.log(JSON.stringify(obj))//to string//dtat ko server mei bhi have to convert to string
