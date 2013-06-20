#!/usr/bin/env node

var numPrimes = 100;
var primesFound=0;
var primes = new Array(numPrimes);

function isPrime(num){
	for (var i = 2; i <= Math.sqrt(num); i++){
		if (num % i == 0){
			return false;
		}
	}
	return true;
}	

for (var i=2; primesFound<numPrimes; i++){
	if (isPrime(i)){
		primes[primesFound] = i;
		primesFound++;
	}
}

var fs = require('fs');
var outfile = 'prime.txt';

for (var i=0; i<primes.length; i++){
	console.log(primes[i] + ',');
	if (i != 0) { fs.appendFileSync(outfile, ',');}
	fs.appendFileSync(outfile, primes[i]);
}	
		
