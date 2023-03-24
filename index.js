class Persona {
    constructor(nombre, apellido, edad,telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono

        this.adicionales = {
            edad: edad,
            telefono: telefono,
        }
    }
   

     saludar (){
        console.log(`Hola, mi nombre es ${this.nombre} + ${this.apellido}`)
    }
     decir_numero_aleatorio(){
        console.log(`El siguiente numero es aleatorio ${(Math.random())}`)
     }
}
class Usuario extends Persona {
    constructor(nombre,apellido,edad,telefono,email,password,nickname) {
        super(nombre,apellido,edad,telefono);
        this.email = email
        this.password = password
        this.nickname = nickname
    }
    iniciar_sesion(){
        console.log(`Sesión iniciada para ${this.nickname}`)
    }
}

let instanciar = (nombre,apellido,edad,telefono,email,password,nickname) => {
    let user = new Usuario(nombre,apellido,edad,telefono,email,password,nickname);
    user.iniciar_sesion()
    console.log(user.adicionales)
}

instanciar("julian","berrio", 19,3023343433, "julian@mail.com", "12345", "behe")