const express = require('express');
const mongoose = require('mongoose');
const Messages = require('./messages.js');
const Pusher = require("pusher");
const { once } = require('./messages.js');
const cors = require("cors")


const db_url = `mongodb+srv://sankalp:sankalp@cluster0.ui7kyd7.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(db_url );


const db = mongoose.connection

db.once("open" , () => {
    console.log("DB Connected")

    const msgCollection = db.collection('messagecontents')
    const changeStream = msgCollection.watch()

    changeStream.on("change", (change) => {
        if (change.operationType === "insert") {
            const messageDetails = change.fullDocument;
            pusher.trigger("messages", "inserted",
            {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received,
            });
        } else {
            console.log("Error triggering pusher")            
        }
    })

}
)


const app = express()
const port = process.env.PORT || 9000


const pusher = new Pusher({
    appId: "1532638",
    key: "a6cb54d19dfa534a88cf",
    secret: "1b2ebfa54664fea2e23c",
    cluster: "ap2",
    useTLS: true
  });

app.use(express.json())

app.use(cors())

app.get('/',(req,res)=>res.status(200).send("hello world"))


app.get('/messages/sync', (req,res) =>{
    Messages.find( (err,data) =>{
        if (err) {
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data);
        }
    })
})


app.post('/messages/new', (req,res) =>{
    const dbMessage = req.body

    Messages.create(dbMessage , (err,data) =>{
        if (err) {
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data);
        }
    })

})


app.listen(port,()=>console.log(`Listning to localhost:${port}`)) 