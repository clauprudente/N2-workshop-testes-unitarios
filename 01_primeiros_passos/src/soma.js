function soma(a, b) {    
    if(typeof a !== 'number' | typeof b !=='number') {
        return new Error('Você deve informar um número!')
    }
    
    if(arguments.length > 2) {
        return new Error('Você deve informar apenas dois números');
    }
    if (a && b) {
        return a+b
    }
    else {
        return new Error('Você deve informar dois números')
    }
}

module.exports = soma;