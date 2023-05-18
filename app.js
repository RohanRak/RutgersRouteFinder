const express = require('express');
const app = express();

// It can be any of these: arrival-estimates, agencies, routes, segments, stops, vehicles
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

// Serve static files (CSS, images, etc.)
app.use(express.static('public'));
// Middleware for parsing JSON bodies
app.use(express.json());
// Middleware for parsing URL-encoded form bodies
app.use(express.urlencoded({ extended: true }));

// Handle form submission
app.post('/form-handler', async (req, res) => {
  // Extract data from the request
  const selection = req.body.selection;
  // THIS TEH MOST IMPORTANT THING LOOK AT THIS IDOT ASHJFKDS AYOH R&N*UEYTR*&CB#TYBC $KJULHSDF KFJASHD
  const data = JSON.parse(await getData("vehicles"));
  const updatedHTML = `
        <p>ur bus is ${JSON.stringify(data.data["1323"])},</p>

  `;

  // Send the updated HTML as the response
  res.send(updatedHTML);
});

// Serve the default HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + 'public/index.html');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
