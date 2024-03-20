var ethers = require('ethers');  
var crypto = require('crypto');

var id = crypto.randomBytes(32).toString('hex');
var privateKey = "0x"+id;
var wallet;
var slen;

if(process.argv.slice(2)[0]!= null){
	slen = process.argv.slice(2)[0].length;
}
else{
	console.log("enter desired string");
	return;
}

const estring = process.argv.slice(2)[0].toUpperCase();

for(i = 0;;i++) {
	wallet = new ethers.Wallet(privateKey);
	if(wallet.address.slice(-slen).toUpperCase() == estring) {
		console.log("\nPrivate key: " + privateKey + "\nAddress: " + wallet.address);
	}
	id = crypto.randomBytes(32).toString('hex');
	privateKey = "0x"+id;
	if(i % 10000 == 0){
		console.log("\nProgress: " + i);
	}
}
