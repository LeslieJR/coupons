const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 8080; // set this in .env file
app.set("port", PORT);
app.use(cors());

app.get('/', function (req, res) {
    res.send('Built done!');
});

app.use('/api', require('./routes/coupons'));

app.listen(app.get("port"), () => {
    console.log(`App listening on port ${app.get("port")}`);
});