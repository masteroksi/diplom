const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('./'));

function fakeResponse(req, res) {
    console.log(req.body);
    setTimeout(() => {
        res.send(JSON.stringify({ status: 'ok' }));
    }, 1000);
}

app.post('/get-calculation-and-discount', fakeResponse);
app.post('/order-a-consultation', fakeResponse);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
