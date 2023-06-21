
async function getData(whichType) {
    const http = require('https');
    const options = {
      method: 'GET',
      hostname: 'transloc-api-1-2.p.rapidapi.com',
      port: null,
      path: `/${whichType}.json?agencies=1323`,
      headers: {
        'X-RapidAPI-Key': '2db6175e9bmsh7aab84ab1852e64p1da0cdjsnd0476b706254',
        'X-RapidAPI-Host': 'transloc-api-1-2.p.rapidapi.com'
      }
    };

    return new Promise((resolve, reject) => {
        const req = http.request(options, function (res) {
          const chunks = [];
    
          res.on('data', function (chunk) {
            chunks.push(chunk);
          });
    
          res.on('end', function () {
            const body = Buffer.concat(chunks);
            const result = body.toString();
            resolve(result);
          });
        });
    
        req.on('error', function (error) {
          reject(error);
        });
    
        req.end();
      });
}

const data = JSON.parse(await getData("vehicles")).data["1323"];
console.log(data);