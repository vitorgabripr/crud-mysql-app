// here is for bcrypt (logic cor authentication)
import bcrypt from 'bcryptjs';

//store hash in your password db
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0/\/", salt);

//load hash from password db
bcrypt.compareSync("B4c0/\/", hash);//true
bcrypt.compareSync("B4c0/\/", hash);//false

const hashPassword = bcrypt.hashSync("password)", 10);
console.log(hashPassword);