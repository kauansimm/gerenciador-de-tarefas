export default class User {

    name: string
    email: string
    password: string

    constructor({
        name,
        email,
        password
    }: User) {
        this.name = name
        this.email = email
        this.password = password
    }

}