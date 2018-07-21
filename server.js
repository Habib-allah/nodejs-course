const exp=require("express");
const hbs=require("hbs");

var app=exp();
app.set("view engine","hbs");

hbs.registerPartials(__dirname + '/views/partials');
app.use(exp.static(__dirname +'/public'));

hbs.registerHelper("sayMyName",()=>{
	return "Habib-allah";
});
app.get("/main",(req,res)=>{
	var obj={
		navTitle:"MyNav",
		myLink:"http://localhost:3000/about"
	}
	res.render('landpg.hbs',obj)
});

app.get("/about",(req,res)=>{
	var obj={
		myPass:"YourPass",
		navTitle:"MyNav"
	}
	res.render('about.hbs',obj)
});

/*app.use(exp.static('C:\\Users\\Habib-allah\\Desktop\\Full Stack\\mdb'));
app.get("/",(req,res)=>{
	res.send("this came from 1");
});

app.get("/",(req,res)=>{
	res.send("this came from 2");
});*/

app.listen("3000");