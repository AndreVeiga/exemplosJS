Array.prototype.pop2 = function() {
    for(let i = 0; i < this.length; i++) {
        if(this[i+1] === undefined){
            delete this[i]
            this.length = i   
        }
    }
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(array)

array.pop()
array.pop2()

console.log(array)