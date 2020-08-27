const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello PoliHub!');
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Polihub is listening on port ' + PORT)
});