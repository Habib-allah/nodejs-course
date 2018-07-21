













/*const req=require('request');
const yargs=require('yargs');
const srcc=require('./srcc');

var argv=yargs.
		options({
			a:{
				demand:true,
				alias:'address',
				string:true,
				describe:"it's clear that's an address"
			}
		}).
		help().
		alias("help","h").
		argv;

//console.log(argv);
srcc.geocodeAddress(argv.a);
//360b4cd30686d5e4266da9e40f0f0772*/






/*console.log("App Started");
const ld=require('lodash');
const yargs=require('yargs');

const srcc=require('./srcc.js');

var argv= yargs.argv;
console.log("With Yargs:", argv);
console.log("\nWith process:", process.argv);

process.argv.forEach(function(cur){
	if (cur=="sayMyName"){
		srcc.sayMyName(argv.fName,argv.sName);
	}
	else if(cur=="remove"){
		console.log("Removing...\n");	
	}
});*/