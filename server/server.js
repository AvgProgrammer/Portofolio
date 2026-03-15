require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const express = require('express');
const path = require('path');

const{MongoClient} = require('mongodb');
const client = new MongoClient(process.env.DB_URL);
const db_name= process.env.DB_NAME || 'myDatabase';
const collection_name= process.env.DB_COLLECTION || 'myCollection';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files (HTML, CSS, JS, images) from the client folder
app.use(express.static(path.join(__dirname, '../client')));

app.use(express.json()); // Middleware to parse JSON bodies

/*Get Routes */
app.get('/api/recent-projects', async (req, res) => {
    console.log("Requesting recent projects...");
    let collection = await db.collection(collection_name);
    let results = await collection.find().sort({ id: -1 }).limit(3).toArray();
    console.log("Fetched recent projects:", results);
    res.json(results);
});

app.get('api/projects', async(req,res)=>{
    console.log("Requesting all projects...");
    let collection = await db.collection(collection_name);
    let results= await collection.find().toArray();
    console.log("Fetching all projects...");
    res.json(results);
});
/*Start Server */
let db;
async function startServer() {
    try{
        console.log("Connecting to database...");
        await client.connect();
        console.log("Connected to database successfully.");
        
        db=client.db(db_name);

        app.listen(PORT, () => {
            console.log(`Server running in Port ${PORT}`);
        });
    }catch (err){
        console.error("Error starting server:", err);
    }
}

startServer();
