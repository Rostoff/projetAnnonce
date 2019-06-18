const express = require('express');
const app = express();
app.use(express.json());
const MongoClient = require("mongodb").MongoClient;
const mongoURL = "mongodb://localhost:27017/bddAnnonce";

let dbConn;

MongoClient.connect(mongoURL, {useNewUrlParser: true},  (error, db)=>{
    if(error){
        console.log("ça ne marche.... ça ne marche pas!")
        throw error;
    } 
    console.log("Connecté à la base de données");
    
    dbConn = db;
});

app.get('/', (req, res) => {
    res.send('Objectif: connecter la base MongoDB');
})



app.get('/bdd', (req, res) => {
    if(!dbConn) {
        res.statusCode = 500;
        res.end('Erreur');
        return    
    }

    dbConn.db("bddAnnonce").collection("AnnonceBdd")
    .find({})
    .toArray((error, results) =>{
            if(error){
                res.statusCode = 500;
                res.end('Erreur');
                return 
            } 
                res.json(results);
                // res.forEach((i, obj) =>{
                //     console.log(obj.title)
                // })
    })
})


app.listen(3000, () => {
    console.log('Connecté :)');
})