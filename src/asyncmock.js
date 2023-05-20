const productos = [
    { nombre: "Aireador de dos bocas", precio: 3500, id: "1", img: "../img/Aireador.webp", detalle: "Modelo OC-1000 , Potente y de excelentes prestaciones, 2 salidas, velocidad regulable, potencia 5 watts.", idCat: "1" },

    { nombre: "Pecera de 200 Litros", precio: 9000, id: "2", img: "../img/Pecera.png", detalle: "Pecera Medidas 100x50x40 cm , Material de vidrio. Capacidad: 200 litros. Grosor vidrio: 6 mm. Refuerzos superiores: 2. Podes agregar la base de apoyo e Iluminadores de Leds (con luces blancas + azules) o bien para tubo de luz", idCat: "2" },

    { nombre: "Piedras Difusoras", precio: 250, id: "3", img: "../img/Piedras fusoras.png", detalle: "Piedra difusora para aireador, importada de china, EXCELENTE CALIDAD. Medida : 2.5 cm x 1.5 cm. Se coloca en el extremo de la manguera del aireador, la función de la misma es generar micro burbujas de aire.", idCat: "4" },

    { nombre: "Filtro Cascada", precio: 6500, id: "4", img: "../img/filtro cascada.png", detalle: "Filtro externo cascada Marina. Capacidad de 400 litros por hora. Material filtrante: Una placa con perlón, carbón activado y cerámicos biológicos, placa con perlón con zeolita. Filtro para peceras chicas, de hasta 37 litros, ideal para peces comunitarios o plantados. Se coloca colgado del lateral de la pecera.   Trabaja con bomba sumergible, más seguro ante corte de luz. Tiene un prefiltro, lo que retiene la mugre gruesa.", idCat: "3" },

    { nombre: "Tratamiento para Peces", precio: 850, id: "5", img: "../img/Tratamiento para Peces.png", detalle: "Acriflavina Lomas, tratamiento contra enfermedades en piel y aletas. Solución bactericida para uso como preventivo y terapéutico. Contenido 30ml", idCat: "5" },

    { nombre: "Calentador de 60w", precio: 4500, id: "6", img: "../img/Calentador.png", detalle: "Calentador Electrónico Sumergible, Potencia: 60 watts, con regulador automático de la temperatura deseada. Rango de trabajo: 20°C a 34°C. Mide aproximadamente 29 cm. El calefactor debe funcionar totalmente sumergido.", idCat: "6" },

    { nombre: "Aireador de una boca", precio: 2600, id: "7", img: "../img/aireador1.png", detalle: "Aireador Super X Classica, Compacto y silencioso, 1 salida con regulador de velocidad. Ideal para peceras chicas de hasta 50 litros", idCat: "1" },

    { nombre: "Filtro interno", precio: 4900, id: "8", img: "../img/Filtro interno.png", detalle: "Silencioso, Potente y Económico, Para acuario de hasta 120 litros. Capacidad Filtrante  880 litros/hora.  Incluye esponja de densidad especial para filtrado físico y biológico, el mismo debe funcionar totalmente sumergido", idCat: "3" }

]


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })

}

export const getProductosPorCategoria = (idcategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idcategoria);
            resolve(productosCategoria);
        }, 2000);
    })
}

