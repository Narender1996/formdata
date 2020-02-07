const express=require('express')
const app=express();
const path=require('path')
const bodyparser=require('body-parser')

const sendmail=require('./mail')
/*
const mongoclient=require(mongodb).mongoclient;
const assert=require('assert')
const url='mongodb://localhost:27017'

const dbName='myproject';
mongoclient.connect(url,function(err,client)
{
    assert.equal(null,err);
    console.log("connect succefully");
    const db=client.db(dbname)
})
*/
app.use(express.static('__dirname'))
app.use(bodyparser.urlencoded({extended:true}));

app.get('/',(req,res)=>{

    res.sendFile( path.join(__dirname,'index.html'))
});

app.post('/',(req,res)=>{
   // console.log('data', req.body);
    const  {emailid,fname,lname}=req.body
    console.log(req.body);
    sendMail(emailid,fname,lname,(err,data)=>{
        if(err)
        {
            res.status(500).json({message:'internal error'});
        }
            else{
                res.json({message:'mail send',data})
            }
    });
    });

/*
app.get('/api/courses/:id',(req,res)=>
{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) res.status(404).send('the course with given id is not found')
    res.send(course)
})
app.get('/api/:id',(req,res)=>{
    res.send(req.params.id)
});
*/

const port=process.env.PORT || 3001;

app.listen(port,()=>{console.log(`server start at port ${port}`)})