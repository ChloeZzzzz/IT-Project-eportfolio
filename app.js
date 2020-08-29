const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello FoliHub!');
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Folihub is listening on port ' + PORT)
});