import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component Yüklendi")

let userService = new UserService()

let user1 = new User(1,"Engin","Demiroğ","Ankara");
userService.add(user1.lastName)

userService.getById(1)
userService.list()