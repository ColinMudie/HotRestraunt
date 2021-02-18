class Reservation {
    constructor(name, phone, email, id){
        this.name = name,
        this.phone = phone,
        this.email = email,
        this.id = id
        this.routeName = name.replace(/\s+/g, '').toLowerCase()
    }
    getName(){
        return this.name
    }
    getPhone(){
        return this.phone
    }
    getEmail(){
        return this.email
    }
    getId(){
        return this.id
    }
    getRouteName(){
        return this.routeName
    }
}
module.exports = Reservation;