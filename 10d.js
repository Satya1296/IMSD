const url = require('url');

const address = 'https://www.example.com/products?category=books&price=low';
const parsedUrl=url.parse(address,true);

console.log('Host:' , parsedUrl.host);
console.log('Pathname:' , parsedUrl.pathname);
console.log('Query Parameters:' , parsedUrl.query);