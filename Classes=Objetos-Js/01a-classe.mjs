class FormaGeometrica {
     
    // alt shift F para formatarrrrrr
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
            throw new Error("ERRO: a base precisa ser numérica e maior que 0")
        }
        this.#base = valor

    }
    set altura(valor) {
        if (typeof valor !== 'number' || valor <= 0) {
            throw new Error("ERRO: a base precisa ser numérica e maior que 0")
        }
        this.#altura = valor

    }

    set tipo(valor) {
        if (!["R", "I", "E"].includes(valor.toUppercase())) {
            throw new Error("ERRO: O tipo precisa ser um dos valores R, I ou E");
        }
        this.#tipo = valor;

    }

    calcArea(){
        switch(this.#tipo){
            case "R":
                return this.#base + this.altura
            case "I":
                return this.#base + this.#altura
            case "E":
                return (this.#base / 2) + (this.#altura / 2) + Math.PI
        }
    }
}

let forma1 = new    FormaGeometrica()

forma1.base = 7
forma1.altura = 22.5
forma1.tipo = "J"

console.log("Área do forma1 ", forma1.calcArea())