const cows = 12;

const cowCount = new Promise(function(resolve, reject){
    if(cows>10){
        resolve(`we have ${cows} on the farm`)
    }else{
        reject(`we don have enought cows in the farm`)
    }
})

cowCount.then(result=>{console.log(result)
}).catch((error)=>{console.log(error)
}).finally (()=>console.log('finally'))


//playground
function delay(time, message) {
   new Promise((resolve)=>{
        (true)
        ?setTimeout(()=>resolve(console.log(`${message}, after ${time}`)),time):
        reject(console.log('error'))
   })
}

delay(2000,'hola')

//solucion del playgroun, no sirvio el operador ternario, y el mensaje de entrada ya contenia el tiempo
export function delay(time, message) {
    return new Promise((resolve) => {
      if (true) {window.setTimeout(()=>resolve(message), time)} else {
        reject(console.log('error'))
      }
    })
  }