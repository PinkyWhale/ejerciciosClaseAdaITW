class Menu{
    constructor(entrada, principal, postre, bebida){
        this._entrada = entrada;
        this._principal = principal;
        this._postre = postre;
        this._bebida = bebida;
        this._precio = 180; 
    }

    // PArametros entrada Objeto

    set entrada(value){
        this._entrada = value;
    }

    get entrada(value){
        this._entrada = value;
    }

    set principal(value){
        this._principal = value;
    }

    get principal(value){
        this._principal = value;
    }

    set postre(value){
        this._postre = value;
    }

    get postre(value){
        this._postre = value;
    }

    set bebida(value){
        this._bebida = value;
    }

    get bebida(value){
        this._bebida = value;
    }
}
