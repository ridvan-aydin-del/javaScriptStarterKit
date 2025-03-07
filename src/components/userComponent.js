import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component Yüklendi")

let logger1 = new BaseLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Engin","Demiroğ","Ankara");
let user2 = new User(2,"Rıdvan","Aydın","Giresun");
userService.add(user1)
userService.add(user2)

//console.log(userService.list())
//console.log(userService.getById(2))

//userService.getById(1)
//userService.list()

console.log("---------------------")
userService.load()


let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara","asdasd")
customerToAdd.type = "customer"

userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())