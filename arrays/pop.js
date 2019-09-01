Array.prototype.pop2 = function() {
    let retorno
    
    for(let i = 0; i < this.length; i++) {
        if(this[i+1] === undefined){
            retorno = this[i]
            delete this[i]
            this.length = i   
        }
    }

    return retorno
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let teste

console.log(array)
teste = array.pop2()
console.log(teste)
console.log(array)
