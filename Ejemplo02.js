class Shipping{
    tipo

    constructor(tipo){
        this.tipo = tipo
    }

    getCost(order){}

    getDate(order){
        return new Date()
    }
}

// en produccion
class Ground extends Shipping{

    constructor(){
        super("Ground")
    }
    getCost(order){
        if(order.getTotal() > 100)
            return 0
            
        return order.getTotalWeight() * 1.5
    }
}

class Air extends Shipping{
    constructor(){
        super("Air")
    }

    getCost(order){
        return order.getTotalWeight() * 3
    }
}

class Drone extends Shipping{
    constructor(){
        super("Drone")
    }

    getCost(order){
        return order.getTotalWeight() * 10
    }
}

// getTotalWeight() * 5
// Maritimo

class Maritimo extends Shipping{
    constructor(){
        super("Maritimo")
    }
    getCost(order){
        return order.getTotalWeight() * 5
    }
}

class Order{
    lineItems
    shipping
    total
    peso

    constructor(shipping, total, peso){
        this.lineItems = []
        this.shipping = shipping 
        this.total = total
        this.peso = peso
    }

    getTotal(){
        return this.total
    }

    getTotalWeight(){
        return this.peso
    }

    setShippingType(st){
        this.shipping = st
    }

    getShippingCost(){
        
        return this.shipping.getCost(this)
    }

    getShippingDate(){
        return new Date()
    }
}