import express from 'express';
const app = express();
app.use(express.json())

import {details} from 'common'

app.post('/',async(req:any,res:any)=>{
    let parse = details.safeParse(req.body)
    if(parse.success)
        res.send('Right Credentials. Welcome!!')
        else
    res.send('Wrong Credentials')
})

app.listen(3001,()=>{
    console.log('Server is running on port 3001')
})