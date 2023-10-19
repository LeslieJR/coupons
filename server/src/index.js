const express = require('express');
const app = express();

const PORT = 8080;
app.set("port", PORT);

app.get('/', function (req, res) {
    res.send('Built done!');
});

app.use('/api', require('./routes/coupons'));

app.listen(app.get("port"), () => {
    console.log(`App listening on port ${app.get("port")}`);
});