const MongoClient =require('mongodb').MongoClient;
const objId=require('mongodb').ObjectID;


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


   db.collection("Todos").updateMany({name:'javad'},{$set :{name:'hossein'},$inc :{age:1}} ,(err,result)=>{

    if(err){
       console.log("err");
     }

     console.log(result);

   } );

    db.close();
});

