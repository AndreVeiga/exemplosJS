Array.prototype.push2 = function( ...value){
    for(let i = 0; i < value.length; i++)
        this[this.length] = value[i]
}

const array =[0, 1, 2, 3, 4]

console.log(array)

array.push(5,6,7,8,9)

console.log(array)