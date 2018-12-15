var rafael = {
    nombre: 'Rafael'
}

var otroRafael = {
    nombre: 'Rafael'
}

var otroRafa = {
    ...rafael
}

console.log(rafael == otroRafael)
console.log(rafael.nombre == otroRafael.nombre)
console.log(otroRafa == rafael)