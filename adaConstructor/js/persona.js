class Persona{
    constructor(nombre,apellido,fecha,dni){
        this._nombre = nombre;
        this._apellido = apellido;
        this._fechaNac = fecha;
        this._dni = dni;
    }

    set nombre(value){
        this._nombre = value;

    }
}