Array.prototype.fill2 = function(value, start, end){
    const initial = !!start ? start : 0
    const stop = !!end ? end : this.length
    for(i = initial; i < stop; i++)
        this[i] = value
    
    return this
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(array)

let teste = array.fill(2,5,7)

console.log('JS => ' + teste)

teste = array.fill2(1,5,7)

console.log('NS => ' + teste + ' <=')
console.log(array)