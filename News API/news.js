var express = require ('express')
var app = express()
app = express.Router();
var path = require('path');
var bodyparser = require('body-parser');
app.use(bodyparser.json()); // support json encoded bodies
app.use(bodyparser.urlencoded({ extended: true })); 
var myArticals = {},myTotalResults = {};
var request = require("request")
var url = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=274dff7f3c354eaab56fa5a7ae3de09c";

app.get('/', function(req, res){
    res.sendFile(__dirname+ '/index.html');
 
   });

app.post('/news', function(req, res){
    request({
        url: url,
        json:true
    },function(error, response, body){
        myArticals = body.articles[4]; 
        myTotalResults = body.totalResults;
        var finalResponse = LoadJson(myArticals, myTotalResults)
        res.send(finalResponse)
    })
});
function LoadJson (myObj={}, totalResult){
    var news_Name = myObj.source.name;
    var title = myObj.title;
    var uRl = myObj.url;
    var urltoIMG = myObj.urlToImage;
    var author = myObj.author;
    var passObj = {"nam":news_Name,"tit" :title,"auth": author, "url" :uRl,"img":urltoIMG}
    return (passObj);

}






module.exports = app;  

// var dom = require('dom-util');
// var request = require('request');
// var https = require('https');
// var url = 'https://api.github.com/users/rsp';

  // console.log(path.join(__dirname, '/rooting/../'));
    // console.log(myObj.source.name, "  " +totalResult)
// var set_news = dom.querySelector("#g_news");
// var set_auth = dom.querySelector("#auth");
// var set_title = dom.querySelector("#titLe");
// var set_url = dom.querySelector("#url");

      // console.log(news_Name);
    // if (news_Name != undefined){
    //     console.log(news_Name + "Hi newss");
    // res.send(news_Name, title, author);
   //console.log(news_Name +" " + author+" " + title)
   
   // console.log("news_Name :" +news_Name)
   // console.log("title :" +myObj.title)
   // console.log("author :" +myObj.author)
   // console.log("URL :" +myObj.uRl)

       // $("set_news").text(news_Name);
    // $("set_auth").text(author);
    // $("set_title").text(title);
    // $("set_url").text(uRl);

