
//  "dependencies": {
//         "body-parser": "^1.19.0",
//         "cors": "^2.8.5",
//         "dotenv": "^10.0.0",
//         "express": "^4.17.1",
//         "mongodb": "^4.1.3"
//       }


const express=require("express");
const cors=require("cors");
const { MongoClient } = require('mongodb');
const bodyParser=require("body-parser");
const ObjectId=require('mongodb').ObjectId;



const app=express();
const port=5000;
//midle ware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const uri = "mongodb+srv://mahmud:yBoZlZ7RrpOF5Aq7@cluster0.10ktf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run(){
        try{
           await client.connect();
            console.log('succeffully')
           const database = client.db('foodShop');
           const productCollection=database.collection('products');
            
          
           

        }
        finally{
                // await client.close();
        }
}
run().catch(console.dir);



app.get('/',(req,res)=>{
        res.send("the server is okk")
})
app.listen(port,()=>{
       console.log("the port is right",port)
})