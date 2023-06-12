import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'

async function fetchData(urlApi){
    const response =  await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFunction = async (urlApi)=>{
    try{
        const products = await fetchData(`${API}/products`);
        const product = await fetchData(`${API}/products/${products[0].id}`)
        const category = await fetchData(`${API}/categories/${product.category.id}`)

        console.log(products);
        console.log(product.title);
        console.log(category.name);    
    }catch (error){
        console.log(error)
    }
}

anotherFunction(API);

//playground

export async function runCode() {
    // your code here
    const url = 'https://domain-api-com';
    try {
      return await fetch(url);
    }catch{
      throw new Error('API Not Found');
    }
}

/* to affront errors we must search in google,
talk, draw, think, re-think.... review the logic in our code
google can help us in may cases but in others no... a simple methodology
is the plastic duck what consist in talk about the problem using a inert object,
it's like to talk with ourselves with an object, we can rest, do a walk, but we have to confront 
the frustration and not to fall in it */