import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'

async function fetchData(urlApi){
    const response =  await fetch(urlApi);
    const data = await response.json();
    return data;
}

async function* iterable(array){
    for (let [key,value] of array){
        yield key = await fetchData(value);
    }
}

const it = [{'products':`${API}/products`},{'product': `${API}/products/${products[0].id}`},{'category':`${API}/categories/${product.category.id}`}]
iterable(it);

// async function* generator(API){
//     yield products = await fetchData(`${API}/products`);
//     yield product = await fetchData(`${API}/products/${products[0].id}`)
//     yield category = await fetchData(`${API}/categories/${product.category.id}`)
// }

console.log('first value')
console.log(iterable.next().value)
console.log('second value')
console.log(iterable.next().value)
console.log('third value')
console.log(iterable.next().value)