const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('274dff7f3c354eaab56fa5a7ae3de09c');
var express = require ('express')
var app = express()

var root_file = require('./news.js')

// var fetch = require('node-fetch')
// var host = 'https://newsapi.org';
// const params = { language: 'en' };
// const options;
// const cb ;

app.use('/', root_file)



app.listen(8080)
console.log('Server 8080: http://127.0.0.1:8080');






// newsapi.v2.sources({
//   category: 'technology',
//   language: 'en',
//   country: 'us'
// }).then(response => {   
//     text = response;
//     newsObj = JSON.parse(text)
//     // console.log(response)   
// });
// var result = newsObj[1];
// console.log(result)
