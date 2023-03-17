class TimeSheetReport{

    static print(empleado, horas){
        alert("Nombre del empleado: " + empleado.getFullName() + " Total: " + Calculo.calcular(horas))
    }

    static print15(empleado, horas){
        alert("Nombre del empleado: " + empleado.getFullName() + " Total: " + Calculo.calcular15(horas))
    }    
}

class Calculo{
    static calcular(horas){
        return horas * 4
    }

    static calcular15(horas){
        return horas * 8
    }
}

class Pago{

    static procesarPago(monto){
        alert("Pago procesado: $ " + monto)
    }
}

class Empleado{
    nombre
    apellido
    telefono

    constructor(nombre, apellido, telefono){
        this.nombre = nombre
        this.apellido = apellido
        this.telefono = telefono
    }

    getName(){
        return this.nombre
    }

    getLastName(){
        return this.apellido
    }

    getFullName(){
        return this.nombre + ' ' + this.apellido
    }
    
}