class MedioPago{
    constructor(){}
    
    static calcularDescuento(monto, descuento){
        let valor = (monto*descuento)/100;
        return valor;
    }
    
}