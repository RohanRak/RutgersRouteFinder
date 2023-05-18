const http = require('https');

// It can be any of these: arrival-estimates, agencies, routes, segments, stops, vehicles
const whichdata = "arrival-estimates";

const options = {
	method: 'GET',
	hostname: 'transloc-api-1-2.p.rapidapi.com',
	port: null,
	path: `/${whichdata}.json?agencies=1323`,
	headers: {
		'X-RapidAPI-Key': '2db6175e9bmsh7aab84ab1852e64p1da0cdjsnd0476b706254',
		'X-RapidAPI-Host': 'transloc-api-1-2.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();