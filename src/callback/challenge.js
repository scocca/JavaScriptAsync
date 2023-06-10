const XMLHttprequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){
    let xhttp = new XMLHttprequest();

        xhttp.open('GET', urlApi, true);
        xhttp.onreadystatechange=function(event){
            if(xhttp.readyState === 4){
                if(xhttp.status ===200){
                    callback(null, JSON.parse(xhttp.responseText));
                } else{
                    const error= new Error ('Error' + urlApi);
                    return callback(error, null);
                }
            }
        }
     xhttp.send();
}


//call to products of platzi fake API
fetchData(`${API}/products`, function(error1, data1){
    //validation of error in the query of products from the fake API
    if (error1) return console.error(error1);
    //If the call pass without the error, no we do a query for the product ID
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        //validation of error in the query of the product ID from the platzi fake API
        if(error2) return console.error(error2);
        //if pass without errors, now do a query to obtain the product category ID
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
            //validation of error in the query of product category ID
            if(error3) return console.error(error3);
            console.log(data1[0]); //shows the first product 
            console.log(data2.title);//shows the first product tittle
            console.log(data3.name);//shows the first product name
        });
    });
});