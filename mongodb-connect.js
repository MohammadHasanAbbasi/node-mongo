const MongoClient =require('mongodb').MongoClient;
const objId=require('mongodb').ObjectID;
var obj=new objId();
console.log(obj);
var user={
    name:"hamed",
    idnum:'Akbar',
    Tel:9586
}

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log('Could not connected to Server');
    }

    console.log('Connected to MongoDB server');


    db.collection('Todos').insertOne(user, (err,result)=>{

        if(err){
            console.log(err);
        }
        console.log(JSON.stringify(result.ops,undefined,2) );

        console.log(result.ops[0]._id.getTimestamp());
    })

    db.close();
});

