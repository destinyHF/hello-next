const https = require("https");
const url = require("url");

const req = https.request({
	hostname:"api.apiopen.top",
	port:443,
	path:"/getTangPoetry",
	method:"POST",
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
	}
},(res)=>{
	console.log("STATUS："+res.statusCode);
	res.setEncoding('utf8');
	res.on('data', (chunk) => {
		console.log(`BODY: ${chunk}`);
	});
	res.on('end', () => {
		console.log('No more data in response.');
	});
});
req.on('error', (e) => {
	console.error(`problem with request: ${e.message}`);
});
req.end();
