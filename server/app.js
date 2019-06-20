const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
 });
const MongoClient = require("mongodb").MongoClient;
const mongoURL = "mongodb://localhost:27017/bddAnnonce";
const ObjectID = require('mongodb').ObjectID;

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



//app.get('/bdd/:id', (req, res) => {
app.get('/bdd', (req, res) => {
    if(!dbConn) {
        res.statusCode = 500;
        res.end('Erreur');
        return    
    }

    dbConn.db("bddAnnonce").collection("AnnonceBdd")
    //.find({_id:req.params.id})
    .find({})
    .toArray((error, results) =>{
            if(error){
                res.statusCode = 500;
                res.end('Erreur');
                return 
            } 
                //res.send(req.params.id);
                res.json(results);
                // res.forEach((i, obj) =>{
                //     console.log(obj.title)
                // })
    })
})

app.get('/customers', (req, res) => {
    if(!dbConn) {
        res.statusCode = 500;
        res.end('Erreur');
        return    
    }

    dbConn.db("bddAnnonce").collection("Customers")
    .find()
    .toArray((error, results) =>{
            if(error){
                res.statusCode = 500;
                res.end('Erreur');
                return 
            } 
                res.json(results);

    })
})

// recherche par id des annonces
    app.get('/bdd/:id', (req, res) => {
        const id = req.params.id;
        if(!dbConn) {
            res.statusCode = 500;
            res.end('Erreur');
            return    
        }

        dbConn.db("bddAnnonce").collection("AnnonceBdd")
        .findOne({_id:ObjectID(id)}, (error, results) =>{
            if(error){
                res.statusCode = 500;
                res.end('Erreur');
                return 
            } 
                //res.send(req.params.id);
                
                res.json(results);
                // res.forEach((i, obj) =>{
                //     console.log(obj.title)
                // })
    })
})

//recherche par id base utilisateurs
app.get('/customer/:customer', (req, res) => {
    const customer = req.params.customer;
    
    if(!dbConn) {
        res.statusCode = 500;
        res.end('Erreur');
        return    
    }
    
    dbConn.db("bddAnnonce").collection("Customers")
    .findOne({_id:ObjectID(customer)}, (error, results) =>{
        if(error){
            res.statusCode = 500;
            res.end('Erreur');
            return 
        } 
            //res.send(req.params.id);
            console.log(customer);
            res.json(results);
            // res.forEach((i, obj) =>{
            //     console.log(obj.title)
            })
    
})


//Ajout de nouvelles annnoces
    app.post('/bdd', (req, res) => {
        if(!dbConn) {
            connect(() => writeCal(calcul));
            return;
        }

        // Exécution de la requête
    dbConn.db('bddAnnonce').collection("AnnonceBdd")
    .insertOne(req.body, (err) => {
        if (err) {
            console.err('Erreur lors de l\'insertion');
        }
        res.json({success: true});
    })
    })






app.listen(3000, () => { //3000 se retrouve dans le localhost:3000
    console.log('Connecté :)');
})
