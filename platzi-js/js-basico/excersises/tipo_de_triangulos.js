let lado_1 = Number(prompt('Escoge el lado 1'))
let lado_2 = Number(prompt('Escoge el lado 2'))
let lado_3 = Number(prompt('Escoge el lado 3'))

// Tipos de triángulos según sus lados

if (lado_1 === lado_2 || lado_2 === lado_3 || lado_3 === lado_1) {
    // Triángulo equilátero
    // Se denomina “triangulo equilátero” a aquellos polígonos que están formados por 3 lineas rectas de iguales, las cuales forman tres ángulos internos que también tienen la misma amplitud.
    console.log(`El trinangulo de lados iguales, eso quiere decir que es un triangulo equilatero.`)
} else if (lado_1 == lado_2 ) {    
    // Triangulo isósceles
    // Se conoce como “triángulos isósceles” a aquellos que están formados por dos lados de igual longitud y uno diferente. Este tipo de triángulos también tiene dos ángulos internos que son de igual medida.
    console.log('chao')
}



// Triangulo escaleno

// A diferencia de los anteriores, los “triángulos escalenos” son aquellos que están formados por tres lineas rectas de distintas medidas. Por lo tanto, todos los ángulos interiores también tienen diferentes amplitudes.

// Triangulo rectángulo

// Los llamados “triángulos rectángulos” son aquellos polígonos que se caracterizan por tener uno de sus ángulos interiores que mide 90º, es decir se trata de un angulo recto. Los otros dos ángulos interiores de este polígono miden menos de 90º.

//     Más Información: ¿Cómo se llaman los lados de un triángulo rectángulo?

// Triangulo obtusángulo

// Esta clase de triangulo denominado “triangulo obtusángulo” tiene como característica principal el estar formado por un ángulo obtuso, es decir un angulo que mide más de 90º. Los otros dos triángulos del polígono son menores a 90º, estos son llamados ángulos agudos.
// Triangulo acutángulo

// Se denomina “triángulos acutángulos” a aquellos polígonos que tienen sus tres ángulos internos con una amplitud menor a 90º, es decir que son ángulos agudos.

//     Relacionado: ¿Cuáles son los triángulos acutángulos?

// Triangulo equiángulo

// Los “triángulos equiángulo”, también conocidos con el nombre de “triángulo equilátero”, son aquellos que están formados por tres ángulos internos de igual medida, todos estos tienen un amplitud de 60º.