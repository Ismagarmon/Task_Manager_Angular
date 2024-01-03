export class User {

    private id: Number = 0

    private nombre: string = ""

    private apellidos: string = ""

    private email: string = ""

    private password: string = ""

    constructor(id: Number, nombre: string, apellidos: string, email: string, password: string ) {
        this.id = id
        this.nombre = nombre
        this.apellidos = apellidos
        this.email = email
        this.password = password
    }

    crearusuario(): Object {
        return {
            _id: this.id,
            nombre: this.nombre,
            apellidos: this.apellidos,
            email: this.email,
            password: this.password
        }
    }
}
