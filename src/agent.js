const finnhubApiKey = "c45btrqad3ia3sn4sf4g";



export async function register(event, symbol) {
  
 
const response = await fetch(`https://finnhub.io/api/v1/webhook/add?token=${finnhubApiKey}`, {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  body: JSON.stringify({'event': event, 'symbol': symbol}) // body data type must match "Content-Type" header
});


console.log(response)

}


export async function list() {
  
  
  
  const response = await fetch('https://finnhub.io/api/v1/webhook/list?token=c45btrqad3ia3sn4sf4g')


  const json = await response.json()

  console.log(json)

}


export async function deleteWh(id){

const response = await fetch('https://finnhub.io/api/v1/webhook/delete?token=c45btrqad3ia3sn4sf4g',{method: 'POST', body: JSON.stringify({'id': id})})
const json = await response.json();

console.log(response)


}