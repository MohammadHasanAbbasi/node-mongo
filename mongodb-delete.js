const MongoClient =require('mongodb').MongoClient;
const objId=require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log('Could not connected to Server');
    }

    console.log('Connected to MongoDB server');


    db.collection('Todos').deleteOne({name:'reza'}, (err,obj)=>{

        if(err){
            console.log(err);
        }

        console.log(obj);
    })

    db.close();
});

