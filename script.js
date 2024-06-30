//Dinero de los usuarios

let data = [
    {
        name: 'Chico1',
        money: 1.5,
        compras:  {
            items: [],
            dineroGastado: 0,
            dineroAnterior: 0,
            numeroCompras: 0
        }
    },
    {
        name: 'Chico2',
        money: 1.7,
        compras:  {
            items: [],
            dineroGastado: 0,
            dineroAnterior: 0,
            numeroCompras: 0
        }
    },
    {
        name: 'Chico3',
        money: 3,
        compras:  {
            items: [],
            dineroGastado: 0,
            dineroAnterior: 0,
            numeroCompras: 0
        }
    }
]

//Data de los helados

let helados = [
    {
        name: 'Helado de agua',
        price: 0.6
    },
    {
        name: 'Helado de Crema',
        price: 1
    }
    ,
    {
        name: 'Bombon Heladix',
        price: 1.6
    }
    ,
    {
        name: 'Bombon Heladovich',
        price: 1.7
    }
    ,
    {
        name: 'Pote de 1/4',
        price: 2.9
    }
    ,
    {
        name: 'Bombon Helardo',
        price: 1.8
    }
    

]

//Solucion

let heladosOrdenados = helados.sort((a, b) => {
    return b.price - a.price;
    });
data.forEach(usuario => {
    let dineroAnterior = usuario.money
    let dineroGastado = null;
    let numeroCompras = 0;
    heladosOrdenados.forEach(helado => {
        let { price } = helado
        if(usuario.money >= price) {
            usuario.money -=  price
            usuario.compras.items.push(helado.name)
            dineroGastado += price
            numeroCompras += 1
            usuario.compras.dineroGastado = dineroGastado
            usuario.compras.dineroAnterior = dineroAnterior
            usuario.compras.numeroCompras = numeroCompras
            
        }
        
    })
});

console.log(data) //Registros
/*[
    {
      name: 'Chico1',
      money: 0.5,
      compras: {
        items: [Array],
        dineroGastado: 1,
        dineroAnterior: 1.5,
        numeroCompras: 1
      }
    },
    {
      name: 'Chico2',
      money: 0,
      compras: {
        items: [Array],
        dineroGastado: 1.7,
        dineroAnterior: 1.7,
        numeroCompras: 1
      }
    },
    {
      name: 'Chico3',
      money: 0.10000000000000009,
      compras: {
        items: [Array],
        dineroGastado: 2.9,
        dineroAnterior: 3,
        numeroCompras: 1
      }
    }
  ]*/