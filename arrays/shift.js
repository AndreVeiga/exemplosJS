Array.prototype.shift2 = function(){
    let final 
    let retorno = this[0]
    for(let i = 0; i < this.length; i++){
        this[i] = this[i+1]
        final = i
    }
    this.length = final
    return retorno
}

const array = [0, 1, 2, 3, 4, 5]

console.log(array)

array.shift2()

console.log(array)
