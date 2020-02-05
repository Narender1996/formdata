const express=require('express')
const app=express();
const path=require('path')
const bodyparser=require('body-parser')


app.use(express.static('index'))
app.use(bodyparser.urlencoded({extended:true}))

app.get('/form',(req,res)=>{

    res.sendFile( path.join(__dirname,'index.html'))
})

app.post('/form',(req,res)=>{
    console.log(res.body);
    res.json('submit')
})

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

const port=process.env.PORT || 3000;

app.listen(port,()=>{console.log(`server start at port ${port}`)})