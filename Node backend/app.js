const express=require('express');
const app=express();
var cors = require('cors');
var Request = require("request");

const googleTrends = require('google-trends-api');

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/',(req,res)=>{
	res.send('Hello world');
});

var apiKey="beb3f839-f111-49a8-8325-a14f018119e4";

app.get('/getHomePage',(req,res)=>{
	Request.get("https://content.guardianapis.com/search?order-by=newest&show-fields=starRating,headline,thumbnail,short-url&api-key="+apiKey, (error, response, body) => {
    if(error) {
        console.log(error);
		res.send(error);
    }
    console.log(JSON.parse(body));
	var to_send=JSON.parse(body);
	res.send(to_send);
});
});


app.get('/getCards/Guardian',(req,res)=>{
	Request.get("https://content.guardianapis.com/search?api-key="+apiKey+"&section=(sport|business|technology|politics)&show-blocks=all", (error, response, body) => {
    if(error) {
        console.log(error);
		res.send(error);
    }
    console.log(JSON.parse(body));
	var to_send=JSON.parse(body);
	res.send(to_send);
});
});

app.get('/getCardsSection/Guardian/:section',(req,res)=>{
	Request.get("https://content.guardianapis.com/"+req.params.section+"?api-key="+apiKey+"&show-blocks=all", (error, response, body) => {
    if(error) {
        console.log(error);
		res.send(error);
    }
    console.log(JSON.parse(body));
	var to_send=JSON.parse(body);
	res.send(to_send);
});
});

app.get('/getDetailedArticles/Guardian',(req,res)=>{
	Request.get("https://content.guardianapis.com/"+req.query.site+"?api-key="+apiKey+"&show-blocks=all", (error, response, body) => {
    if(error) {
		console.log("This is craxy")
        console.log(error);
		res.send(error);
    }
    console.log(JSON.parse(body));
	var to_send=JSON.parse(body);
	res.send(to_send);
});
});

var apiKEYNY="9rKvi6sMMUWnTYsGiNqEsFzGXvtk3dH3"

app.get('/getCards/NYT',(req,res)=>{
	Request.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key="+apiKEYNY, (error, response, body) => {
    if(error) {
        console.log(error);
		res.send(error);
    }
    console.log(JSON.parse(body));
	var to_send=JSON.parse(body);
	res.send(to_send);
});
});

app.get('/getCardsSection/NYT/:section',(req,res)=>{
	Request.get("https://api.nytimes.com/svc/topstories/v2/"+req.params.section+".json?api-key="+apiKEYNY, (error, response, body) => {
    if(error) {
        console.log(error);
		res.send(error);
    }
    console.log(JSON.parse(body));
	var to_send=JSON.parse(body);
	res.send(to_send);
});
});

app.get('/getDetailedArticles/NYT',(req,res)=>{
	Request.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=web_url:\""+req.query.site+"\"&api-key="+apiKEYNY, (error, response, body) => {
    if(error) {
        console.log(error);
		res.send(error);
    }
    console.log(JSON.parse(body));
	var to_send=JSON.parse(body);
	res.send(to_send);
});
});

app.get('/getSearchArticles/:section',(req,res)=>{
	var nY=''
	var Guar=''
	//https://content.guardianapis.com/search?q=%5bQUERY_KEYWORD%5d&api-key=%5bYOUR_API_KEY%5d&show-blocks=all
	Request.get("https://content.guardianapis.com/search?q="+req.params.section+"&api-key="+apiKey+"&show-blocks=all", (error, response, body) => {
    if(error) {
        console.log(error);
		res.send(error);
    }
	console.log("Logging Guaarrrrrr")
    console.log(JSON.parse(body));
	var GuarSend=JSON.parse(body);
	Guar=GuarSend;
	//
	Request.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+req.params.section+"&api-key="+apiKEYNY, (error, response, body) => {
    if(error) {
        console.log(error);
		res.send(error);
    }
	console.log("NYYYYYYYY")
    console.log(JSON.parse(body));
	var NySend=JSON.parse(body);
	nY=NySend;
	var fsend={
		ny: NySend,
		guar: Guar
	}
	res.send(fsend)
	
	});
	});
});

app.get('/getTrends/:reqword',(req,res)=>{
	
	googleTrends.interestOverTime({keyword: req.params.reqword, startTime: new Date('June 1, 2019')})
	.then(function(results){
	  res.send(results);
	})
	.catch(function(err){
	  console.error(err);
	  res.send(err);
	});
	
	
});

app.get('/getDetailedItems/:reqword',(req,res)=>{
	
	Request.get("https://content.guardianapis.com/search?q="+req.params.reqword+"&api-key="+apiKey+"&show-blocks=all", (error, response, body) => {
    if(error) {
		console.log("This is craxy")
        console.log(error);
		res.send(error);
    }
    console.log(JSON.parse(body));
	var to_send=JSON.parse(body);
	res.send(to_send);
});
});

module.exports=app;