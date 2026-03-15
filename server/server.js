require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const db=process.env.DB_URL;

// Serve all static files (HTML, CSS, JS, images) from the client folder
app.use(express.static(path.join(__dirname, '../client')));

app.use(express.json()); // Middleware to parse JSON bodies


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

app.get('/',function(req,res){
    var options={
        root: path.join(__dirname,'../client')
    }
    res.sendFile('index.html', options, function(err){
        console.log(err);
    })
});
