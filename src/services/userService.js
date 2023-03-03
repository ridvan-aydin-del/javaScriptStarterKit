export default class UserService{
    add(user){
        console.log("Kullanıcı Eklendi" + user)
    }
    list(){
        console.log("Kullanıcılar Listelendi")
    }
    getById(id){
        console.log("Kullanıcı Detayı Getirildi")
    }
}