const express = require('express');  
let app = express();
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
const cors = require('cors');
app.use(express.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cors());



mongoose.connect('mongodb://localhost/todo_data_base',{ useNewUrlParser: true, useUnifiedTopology: true}, function(err) {
    if (err) throw err;
});
    let tacheSchema = new mongoose.Schema({
        name: String, 
        id: Number, 
        createdAt: String, 
        todo: Boolean
    }) 
    

    let tacheModel = mongoose.model('tacheList', tacheSchema);


    app.post('/todo',  function(req, res) {
            let matache = new tacheModel({
                name: req.body.name, 
                id: parseInt(req.body.id), 
                createdAt: req.body.createdAt, 
                todo:req.body.todo
            }) 
            matache.save(function(err){
                if (err) throw err
            }) 
            console.log('tache ajoutée')

    }) 

    app.get('/todo', function(req, res) {
        tacheModel.find(function(err, todo) {
            if (err) throw err
            console.log(todo); 
            res.json(todo);

        }); 
        
    }); 

    app.get('/todo/:id', function(req, res) {
        tacheModel.findOne({id: req.params.id}, function(err, result){
            if (err) throw err 
            console.log(result)
            res.json(result)
        }) 
        

        
    }) 

    app.put('/todo/:id', async function(req, res) { 
        // let todoTache = await tacheModel.findOne({id: req.params.id}) 
        await tacheModel.updateOne({id: req.params.id}, {todo: req.body.todo}) 
        res.send()
        });
    
 



app.listen(3000, function() {
    console.log('hello');
});