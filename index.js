class User {
    constructor (firstName, lastName, id, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id
        this.age = age
    }
    getnFirstName() {
        return this.firstName
    }
    getLastName() {
        return this.lastName
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
    getId() {
        return this.id
    }
    getAge() {
        return this.age
    }
    getUserObject() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            fullName: `${this.firstName} ${this.lastName}`,
            id: this.id,
            age: this.age
        }
    }
}

module.exports = User