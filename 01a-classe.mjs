class FormaGeometrica {
    //  # equivale ao private do Java
    #base
    #altura
    #tipo

    get base() {
        return this.#base
    }
    get altura() {
        return this.#altura
    }
    get tipo() {
        return this.#tipo
    }

    set base(valor) {
        if (typeof valor !== 'number' || valor <= 0) {
            throw new Error("ERRO: a base precisa ser numérica e maior que zero.")
        }
        this.#base = valor
    }
    set altura(valor) {
        if (typeof valor !== 'number' || valor <= 0) {
            throw new Error("ERRO: a altura precisa ser numérica e maior que zero.")
        }
        this.#altura = valor
    }
    set tipo(valor) {
        if (!["R", "T", "E"].includes(valor.toUpperCase())) {
            throw new Error("ERRO: o tipo precisa ser um dos valores R, T ou E.")
        }
        this.#tipo = valor.toUpperCase()
    }

    calcArea(){
        switch(this.#tipo){
            case "R":
                return this.#base * this.#altura
            case "T":
                return this.#base * this.#altura / 2
            case "E":
                return (this.#base / 2) * (this.#altura / 2) * Math.PI
        }
    }
}

let forma1 = new FormaGeometrica()
let forma2 = new FormaGeometrica()

forma1.base = 7
forma1.altura = 22.5
forma1.tipo = "r"

console.log(`Área da forma1: ${forma1.calcArea()}`)

forma2.base = 5
forma2.altura = 10
forma2.tipo = "t"

console.log(`Área da forma2: ${forma2.calcArea()}`)