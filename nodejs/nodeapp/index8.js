 import bcrypt from 'bcrypt'
// const pwd = "pass1234"
// const hashedpwd = await bcrypt.hash(pwd,10)
// console.log(hashedpwd)

const check = await bcrypt.compare("pass1234","$2b$10$aNeXOxOE77UkbKyo7NQY0Ok.Caq.LqAHlMZkw5VcAv/RsBeU3zQQa")
console.log(check);

